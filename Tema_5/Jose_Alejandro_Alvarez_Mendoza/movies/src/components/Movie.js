import React from "react";
import '../styles/movie.css';

export const Movie = ({movie}) => {
    return (
        <div className="card">
            <img className="card-img-top" src={movie.image} alt={movie.name}/>
            <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text"><b>Sinopsis</b>: {movie.synopsis}</p>
                <p className="card-text"><b>Duración</b>: {movie.duration} min.</p>
                <p className="card-text"><b>Calificación</b>: {movie.rating} / 10</p>
            </div>
        </div>
    );
}
