import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import '../style/App.css';

const App: React.FC = () => {

    const [news, setNews] = useState([]) //matriz pra pegar as noticias

    const getNews = async() => {
        try{
            await fetch("https://newsapi.org/v2/everything?q=CyberSecurity&pageSize=10&sortBy=publishedAt&apiKey=7c56229fcfa74e3cab31f6e795b2e00e") //conectando a api com minha chave
            .then(res => res.json())
            .then(json => setNews(json.articles))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        getNews()
    },[])//vetor porque aqui nele que vão ser armazenadas as notícias   



  return (
    <div className='page-container'>
      <NavBar />
        <div className="content-wrap">
            <Home news={news}/>
        </div>
      <Footer />
    </div>
  );
};

export default App;
