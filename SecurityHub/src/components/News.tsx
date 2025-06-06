import '../style/News.css';
import image from '../images/image.png';

type newsProp ={
    news:any
}

const News = (props:newsProp) => {
    return(
        <div>
            
            {props?.news?.map((data:any) => {
                const previewDescription = data?.description ? data.description.substring(0, 150) : 'Sem descrição disponível';//se data desciprtion existir, limita a 100 e atribui a previwe, senão atribui o 'Sem descrição disponível' a preview
                const previewTitle = data?.title ? data.title.substring(0, 100) : 'Sem título disponível';

                return <div>

                    <div className='elementsDiv'>
                        <div className='newsDiv'>
                            <div className='titleDiv'>
                                <h4 id='title'>{previewTitle}..</h4><br />
                            </div>
                            <a>{previewDescription}...</a><br />
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
                </div>
            })}
            
        </div>
    )
}

export default News