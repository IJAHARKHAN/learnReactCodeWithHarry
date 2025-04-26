import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import notImage from  '../images/notImage.jpg'

function NewsItem() {
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=a8887e9907604d9297624a29b055176a

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // console.log('moon', articles)


    //  const [pagenumber, setpagenumber] = useState(1)
    //   console.log('pagenumber', pagenumber)
    
    // let handlePre = ()=> {
    //     setpagenumber(pagenumber - 1 )  
    // }
    
    // let handleNext = ()=> {
    //   setpagenumber(pagenumber + 1 )
    // }

  
    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=a8887e9907604d9297624a29b055176a')
    //   fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a8887e9907604d9297624a29b055176a&page=${pagenumber}&pageSize=5`)
    //   fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a8887e9907604d9297624a29b055176a&page=${pagenumber}&pageSize=5`)
        .then(response => response.json())
        .then(data => {
          setArticles(data.articles);       
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching news:', error);
          setIsLoading(false);
        });
    }, []);

    // if (isLoading) {
    //     return <div className=''>Loading News...</div>;
    //   }

  return (
    <>   
   <div className="container" style={{marginTop:'60px'}}>
    <h1 className='ps-2'>Top News Headlines</h1>
    {isLoading && (<div className=''>Loading News...</div>)}
    {/* <ul>
      {articles.map((article, index) => (
        <li key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </li>
      ))}
    </ul> */}
<div className='d-flex flex-wrap gap-2 ps-2 custome-card'>
    {articles && articles.length > 0 ? (
        articles.map((item, index)=>(
        <div className="card">
        <img src={item.urlToImage ? item.urlToImage : notImage} className="card-img-top" alt="..." style={{height:'25vmin'}}/>
        <div className="card-body">
          <h5 className="card-title">{item.title && item.title.slice(0,45) + '...'}</h5>
          <p className="card-text">{item.description ? item.description.slice(0,60) + '...' : 'Not Avalable'}</p>
          {/* <p className="card-date">Published At: {item.publishedAt.slice(0,-10)}</p> */}
          <p className="card-date">{new Date(item.publishedAt).toGMTString() }</p>
          <Link to={item.url} target='_blank' className="btn btn-primary btn-sm">More Detail</Link>
        </div>
      </div>
        ))
        
    ) 
    : (<div>No Data Found</div>)
    } 

</div>

{/* <div className='d-flex justify-content-around mt-3'>
<button className='btn btn-dark btn-sm' disabled={pagenumber === 1} onClick={handlePre}>Previous</button>
<button className='btn btn-dark btn-sm' disabled={pagenumber === 8} onClick={handleNext}>Next</button>
</div> */}
</div>

  
  </>
  )
}

export default NewsItem