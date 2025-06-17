import { Link } from 'react-router-dom';
import '../style/Footer.css';
import githubIcon from '../../public/github.svg';

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='footers'>
                <div className='topFooter'>
                    <Link to="/">Security Hub</Link>
                </div>
                <div className='midFooter'>
                    <Link to="/suggestions">Fale Conosco</Link>
                    <Link to="/terms">Termos de Uso</Link>
                </div>
                <div className='bottomFooter'>
                    <a>2025 - Security Hub. Um novo jeito de gerenciar suas senhas.</a><br></br>     
                </div>
                <div className='iconsForm'>
                    <a href='https://github.com/Kabralll/SecurityHub' target='_blank'><img src={githubIcon} className='githubIcon' /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
