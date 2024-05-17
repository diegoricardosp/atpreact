import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../estilos/estilos.css";
import firebase from '../../firebase';

//grava dados do Cadastro

class Cadastro extends Component{
  
    constructor(props){ //método construtor com variáveis 
      super(props);
      this.state = {
        nome: "",
        sobrenome: "",
        data: "",
        email: "",
        senha:"",
      }

      this.gravar = this.gravar.bind(this)
    }

    //cria cadastro do usúario com email e senha, pega UID do Firebase
    async gravar(){ //async torna método assincrono, ajuda a comunicar com servidores externos/API, roda em background 
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha) //chamada sincrona para utilizar o async. Grava email e senha no Firebase Authentication
        .then( async (retorno) => { //then executa algo quando tem um callback. Quando executa chamada do firebase, gera uma promise, uma promessa que vai retornar alguma coisa, o que pode atrapalhar no uso da aplicação

            await firebase.firestore().collection("Usúario").doc(retorno.user.uid).set({ //preenche com informações do estado do componente. Obtém UID, que é uma chave aleatória e única por usúario cadastrado no Firebase
              nome: this.state.nome,
              sobrenome: this.state.sobrenome,
              data: this.state.data,
              
          });
    });
    alert('Dados gravados com sucesso! \nVocê foi encaminhado para a página de login.')
  }


    render(){ //cria inputs para inserção de dados e setState preenche variaveis do método construtor
      return(
        <div className='text2'>
            <h1 className='textobody'>Página de cadastro</h1>
            <input type='text' className= 'legend' placeholder='Nome' onChange={(e)=>this.setState({nome:e.target.value})}></input> 
            <br/>
            <input type='text' className= 'legend' placeholder='Sobrenome' onChange={(e)=>this.setState({sobrenome:e.target.value})}></input>
            <br/>
            <input type='date' className= 'date' placeholder='Data de nascimento:' onChange={(e)=>this.setState({data:e.target.value})}></input>
            <br/>
            <input type='text' className= 'legend' placeholder='Email' onChange={(e)=>this.setState({email:e.target.value})}></input>
            <br/>
            <input type='password' className= 'legend' placeholder='Senha' onChange={(e)=>this.setState({senha:e.target.value})}></input>
            <br/>
            <Link to="/Login"><button onClick={this.gravar}>Gravar</button></Link>
            <br/>
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Cadastro;