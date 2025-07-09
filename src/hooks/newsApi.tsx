import { useEffect, useState } from 'react';

export const newsApi = () => {

  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const res = await fetch(`https://news-api-backend-qpzm.onrender.com/news?q=Cybersecurity Password`);//só consigo usar variavel no texto se ele tivir entre aceento grave (`)
      
      const json = await res.json();
      setNews(json.articles);
    } catch (err) {
      console.error(err);
    }

  };

  useEffect(() => {
    getNews();
  }, []);
  
    return news; //retorna todas as noticias coletadas
  };
