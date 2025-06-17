import { Link } from 'react-router-dom';
import '../style/NavBar.css';
import logo from '../../public/logo.png';
import LightMode from '../hooks/lightMode';

const NavBar: React.FC = () => {
    return (
        <div className='nav'>
            <div className='topNav'>
                <div className='switchColor'>
                    <LightMode/>
                </div>
                <div className='title'>
                    <img src={logo} id='logoImage'/>
                    <Link to="/">Security Hub</Link>
                </div>
                <div className='buttonsToken'>
                    <Link to="/recoverToken" id='token'>Token</Link>
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
