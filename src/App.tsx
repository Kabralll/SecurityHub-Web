import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppRoutes from './routes/Routes'; // <- Aqui você importa as rotas
import {newsApi} from './hooks/newsApi';
import './style/App.css';

const App: React.FC = () => {
  
 const news = newsApi();
 
  return (
    <Router>
        <div className="page-container">
          <NavBar />
          <div className="content-wrap">
            <AppRoutes news={news} /> {/* Passando as notícias como prop */}
          </div>
          <Footer />
        </div>
    </Router>
  );
};

export default App;
