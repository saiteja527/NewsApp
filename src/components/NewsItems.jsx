import React from 'react'

const NewsItems = ({ title, description, url, img, author }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" style={{ width: "345px"}}>
      <img src={img} className="card-img-top" style={{width:"343px",height:"200px"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">Author: {author}</p>
        <p className="card-text">{description.slice(0,90)}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems