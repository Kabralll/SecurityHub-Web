type newsProp ={
    news:any
}

const News = (props:newsProp) => {
    return(
        <div>
        {props?.news?.map((data:any) => {
            return <>
                <h3>{data?.title}</h3><br />
                <a>{data?.description}</a><br />
                <a href={data?.url}>{data?.url}</a><br /><br />
            </>
        })}
        </div>
    )
}

export default News