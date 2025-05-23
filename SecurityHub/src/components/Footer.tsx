import React from 'react';
import '../style/Footer.css';

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='topFooter'>
                <a href='#'>Security Hub</a>
            </div>
            <div className='midFooter'>
                <a href='#'>Fale Conosco</a>
                <a href='#'>Termos de Uso</a>
                <a href='#'>Coleta de Dados</a>
            </div>
            <div className='bottomFooter'>
                <a>2025 - Security Hub. Um novo jeito de gerenciar suas senhas.</a>
            </div>
        </div>
    );
};

export default Footer;
