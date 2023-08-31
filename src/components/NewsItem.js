import React from "react";

 const NewsItem =(props)=>{ 
  
    const { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
       <div>
        <div className="card my-4 ">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"  style={{ left: "90%", zIndex: "1" }}> {source} </span>
          <img src={ !imgUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJ3EAQdbOs9Jqb799a9sLY3fKVtcLI-PHHG4GJh5AxGP-MpeH8bpRPjpN5rMPCHCPbM8&usqp=CAU':imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
             <small className="text-body-secondary">By {!author ?"Unknow":author} on {new Date(date).toGMTString()}</small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary" > Read more
            </a>
          </div>
        </div>
      </div>
    )
  }
  export default NewsItem
