import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../estilos/estilos.css";
import firebase from "../../firebase"

class Login extends Component{  //método construtor com variáveis 
    constructor(props){
        super(props)
        this.state = {
            email: "",
            senha: ""
        }

        this.acessar = this.acessar.bind(this);
    }

    //valida autenticação do usúario com login e senha conforme cadastro no Firebase
    async acessar(){
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            window.location.href ="./Home";
        })
        .catch((erro)=> {
            window.location.href ="./Login";
            window.alert('Usúario e/ou senha incorretos!');
        })

    }

    render(){ //input login e senha
        return(
        <div className='text'>
            <h1 className='textobody'>Página de Login</h1>
                <input type='text' className='legend' placeholder='Email' onChange={(e)=>this.setState({email:e.target.value})}></input>
                <br/>
                <input type='password' className='legend' placeholder='Senha' onChange={(e)=>this.setState({senha:e.target.value})}></input>
                <br/>
                <button onClick={this.acessar}>Acessar</button>
                <Link to="/Cadastro"><button>Cadastre-se</button></Link>
        </div>
        )
    }

}

export default Login;
