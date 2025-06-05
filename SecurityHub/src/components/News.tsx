import '../style/News.css';

type newsProp ={
    news:any
}

const News = (props:newsProp) => {
    return(
        <div>
            
            {props?.news?.map((data:any) => {
                return <>
                    <div className='newsDiv'>
                        <div className='titleDiv'>
                            <h3 id='title'>{data?.title}</h3><br />
                        </div>
                        <a>{data?.description}</a><br />
                        <a href={data?.url}>Ler mais</a><br />
                    </div>
                </>
            })}
            
        </div>
    )
}

export default News