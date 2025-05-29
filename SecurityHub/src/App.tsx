import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppRoutes from './routes/Routes'; // <- Aqui você importa as rotas
import './style/App.css';

const App: React.FC = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const res = await fetch("https://newsapi.org/v2/everything?q=CyberSecurity&pageSize=10&sortBy=publishedAt&apiKey=7c56229fcfa74e3cab31f6e795b2e00e");
      const json = await res.json();
      setNews(json.articles);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

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
