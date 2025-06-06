import '../style/News.css';
import image from '../images/image.png';

type newsProp ={
    news:any
}

const News = (props:newsProp) => {
    return(
        <div>
            
            {props?.news?.map((data:any) => {
                return <>


                <div className='elementsDiv'>
                    <div className='newsDiv'>
                        <div className='titleDiv'>
                            <h3 id='title'>{data?.title}</h3><br />
                        </div>
                        <a>{data?.description}</a><br />
                        <div className='imageDiv'>
                        {data?.urlToImage ? (
                            <img src={data.urlToImage} id="newsImage" />
                        ) : (
                            <img src={image} id='noImage'/>
                        )}
                        </div>
                        <div className='readMoreDiv'>
                            <a href={data?.url} target='_blank' id='readMore'>Ler mais</a><br />
                        </div>
                    </div>
                </div>
                </>
            })}
            
        </div>
    )
}

export default News