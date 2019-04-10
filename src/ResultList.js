import React, { Component } from 'react';


class ResultList extends Component {
  render() {
    return (
      <div className="result-list">
        {this.props.list.map((entry, index) =>{
          let {title, date, rating, vote, poster} = entry
          let url = `https://image.tmdb.org/t/p/w92/${poster}`
          return (
            <div key={index} className="show-card">
              <div className="show-title">{title}</div>
              <div className="card-contents">
                <div className="content poster">
                  <img src={url}/>
                </div>
                <div className='content info'>
                  <span>{`Date: ${date}`}</span>
                  <span>{`Rating: ${rating}`}</span>
                  <span>{`Votes: ${vote}`}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default ResultList;
