import React from "react";

export const Movie = ({ movie }) => {
    const { title, image, synopsis, duration, genre, rating } = movie;

    return (
        <div className="movie">
            <h2>{title}</h2>
            <img src={image} alt={title}/>
            <p>{synopsis}</p>
            <p>Duración: {duration}</p>
            <p>Género: {genre}</p>
            <p>Puntuación: {rating}</p>
            <button className="btn btn-success m-1">Seleccionar asientos</button>
        </div>
    );
};