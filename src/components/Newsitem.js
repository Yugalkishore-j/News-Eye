import React from 'react'

const Newsitems = (props) => {
    let {title, description, imageUrl, url, author, date, source } = props ;
    return (
      <div className="my-3">
        <div className="card">
        <span className=" badge position-absolute  rounded-pill ">{source}</span>
          <img src={!imageUrl?"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown":author} on {new Date (date).toUTCString()}</small></p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read more..</a>
            </div>
        </div>
      </div>  
    )
}

export default Newsitems ; 