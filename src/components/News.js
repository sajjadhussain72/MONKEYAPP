 import React, { useEffect, useState } from 'react'
 import NewsItem from './NewsItem'
 import Spinner from './Spinner'
 import { PropTypes } from 'prop-types'
 import InfiniteScroll from "react-infinite-scroll-component"

 const News = (props)=> {
     const [articles,setArticle] = useState([])
     const [loading,setLoading] = useState(true) 
     const [page,setPage] = useState(1)
     const [totalResults,setTotalResults] = useState(0)
     const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
    }
        const updateNews= async ()=>{
        props.setProgress(5) ;
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}`
        let data = await fetch(url)
        props.setProgress(30) ;
        let parsedDatas= await data.json()
        props.setProgress(50) 
        setArticle(parsedDatas.articles)
        setTotalResults(parsedDatas.totalResults)
        setLoading(false)
        setPage(1)    
        props.setProgress(100) ;
       }
       useEffect(()=>{
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews()
             // eslint-disable-next-line
       },[])
       
      const fetchMoreData = async()=> {
       
           let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}`
           setPage(page +1) 
           let data = await fetch(url)
          let parsedDatas= await data.json()
          setArticle(articles.concat(parsedDatas.articles))
         setTotalResults(parsedDatas.totalResults)
        // updateNews()
      }
 
    return (
         <div>
            <h1 className='text-center py-5 '>MonkeyNews Top {capitalizeFirstLetter(props.category)} headline</h1>
             {loading && <Spinner/>}
              <InfiniteScroll 
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !==totalResults} 
                loader={ <Spinner/>}
               >
                <div className="container">
                   <div className='row'>
                       {articles.map((element)=> {
                          return <div className=' col-md-4 mb-3'key={element.url}>
                                <NewsItem title={element.title?element.title:''} description={element.description?element.description:''} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>
                          } 
                        )}
                   </div>            
                </div>
             </InfiniteScroll>
         </div>
      )}
      News.defaultProps ={
        country: 'us',
        category:'general',            
      }
      News.propTypes={
       country: PropTypes.string,
       category: PropTypes.string
      }
export default News