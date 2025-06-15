import News from '../components/News'

type newsProp ={
    news:string[];
}

const Home = (props:newsProp) => {
  return (
    <div>
        <h1><center>Noticías do dia</center></h1><br/>
        <News news={props?.news}/><br/>
        <h1><center>Volte amanhã para mais notícias!</center></h1>
    </div>
  );
};

export default Home;
