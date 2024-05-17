import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

import Home from './paginas/Home';
import Principal from './paginas/Principal';
import NotFound from './paginas/NotFound';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';

//cria rotas para as páginas do site

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Principal/>} />
                <Route exact={true} path="/home" element={<Home/>} />
                <Route exact={true} path="*" element={<NotFound/>} />
                <Route exact={true} path="/cadastro" element={<Cadastro/>} />
                <Route exact={true} path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
