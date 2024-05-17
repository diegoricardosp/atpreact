import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../estilos/estilos.css";

//página principal

class Contato extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(     
        <div className="text">
            <h1 className='textobody'>Atividade Somativa 2 - Página Inicial</h1>
            <h2 className='textobody'>Disciplina: Tecnologias Para Desenvolvimento Web</h2>
            <Link to="/Login"><button>Login</button></Link>
            <Link to="/Cadastro"><button>Cadastro</button></Link>
        </div>
      )
    }
}

export default Contato;