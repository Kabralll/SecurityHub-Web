import News from '../components/News'

type newsProp ={
    news:any
}

const Home = (props:newsProp) => {
  return (
    <div>
        <h1><center>Noticías do dia</center></h1><br/>
        <News news={props?.news}/><br/>
        <h2><center>Volte amanhã para mais notícias!</center></h2>
    </div>
  );
};

export default Home;
