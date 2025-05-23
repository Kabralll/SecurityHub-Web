import React from 'react';
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
                    <a href="#">Security Hub</a>
                </div>
                <div className='buttons'>
                    <a href="#" id='register'>Registrar</a>
                    <a href="#" id='signIn'>Entrar</a>
                </div>
            </div>
            <div className='midNav'>
                <a href="#">Notícias</a>
                <a href="#">Aplicativo</a>
                <a href="#">Sobre</a>
            </div>
        </div>
    );
};

export default NavBar;
