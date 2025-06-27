// Movie.js

import React from 'react';
import '../styles/Movie.css'

const Movie = ({ data }) => {
  return (
    <div className="card">
        <img
          src={data.Poster}
          className="card-img-top"
          alt={data.Title}
          width={25}
          height={300}
        />
        <div className="card-body">
          <h5 className="card-title">{data.Title}</h5>
          <p className="card-text">{data.Type} - {data.Year}</p>
          <button type="button" class="btn btn-success">Selección de asientos</button>
        </div>
    </div>
  );
};

export default Movie;
