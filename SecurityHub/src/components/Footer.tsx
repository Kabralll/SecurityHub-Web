import { Link } from 'react-router-dom';
import React from 'react';
import '../style/Footer.css';

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='topFooter'>
                <Link to="/">Security Hub</Link>
            </div>
            <div className='midFooter'>
                <Link to="/suggestions">Fale Conosco</Link>
                <Link to="/terms">Termos de Uso</Link>
                <Link to="/dataCollection">Coleta de Dados</Link>
            </div>
            <div className='bottomFooter'>
                <a>2025 - Security Hub. Um novo jeito de gerenciar suas senhas.</a>
            </div>
        </div>
    );
};

export default Footer;
