import { useEffect, useState } from 'react';

export const newsApi = () => {

  const [news, setNews] = useState([]);
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const getNews = async () => {
    try {
      const res = await fetch(`https://newsapi.org/v2/everything?q=CyberSecurityANDPassword&language=en&pageSize=12&sortBy=publishedAt&apiKey=${API_KEY}`);//só consigo usar variavel no texto se ele tivir entre aceento grave (`)
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
