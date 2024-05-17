import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../estilos/estilos.css";
import firebase from 'firebase';

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome:"",
        sobrenome: "",
        data: ""
      }
    }
    

    async componentDidMount(){
      await firebase.auth().onAuthStateChanged(async (usuario)=>{ 
        if (usuario){
          var uid = usuario.uid;
          await firebase.firestore().collection("Usúario").doc(uid).get()
          .then((retorno)=>{
            this.setState({
              nome: retorno.data().nome,
              sobrenome: retorno.data().sobrenome,
              data: retorno.data().data,
            });

          }); 
        } 
      });
    }

    render(){
      return(
        <div>
            <h1 className='textobody'>Olá, {this.state.nome} {this.state.sobrenome}!</h1>
            <h2 className='textobody'>Sua data de nascimento é {this.state.data}</h2>
            <Link to="/"><button>Sair</button></Link> <br/>
        </div>
      )
    }
}

export default Home;