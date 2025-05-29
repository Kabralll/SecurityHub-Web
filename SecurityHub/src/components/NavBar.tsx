import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';
import searchIcon from '../images/search.svg';

const NavBar: React.FC = () => {
    return (
        <div className='nav'>
            <div className='topNav'>
                <div className='searchIcon'>
                    <img src={searchIcon} alt="Search" id='searchIconImage'/>
                </div>
                <div className='title'>
                    <Link to="/">Security Hub</Link>
                </div>
                <div className='buttons'>
                    {/* Se você quiser fazer rotas para registro e login, troque # por rotas reais */}
                    <Link to="/register" id='register'>Registrar</Link>
                    <Link to="/signin" id='signIn'>Entrar</Link>
                </div>
            </div>
            <div className='midNav'>
                <Link to="/">Notícias</Link>
                <Link to="/app">Aplicativo</Link> {/* exemplo, ajuste conforme sua rota */}
                <Link to="/about">Sobre</Link>     {/* exemplo, ajuste conforme sua rota */}
            </div>
        </div>
    );
};

export default NavBar;
