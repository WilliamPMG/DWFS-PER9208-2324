import React from "react";

export const Movie = ({ title, year, image }) => {
    return (
        <div className="card-item col-xs-12 col-md-4 col-lg-3">
            <div className="card card-body">
                <img src={image} className="image-movie" alt="movie image" />
                <h3 className="title">{title}</h3>
                <small>Ciencia Ficción, Año: {year}</small> 
                <p>Puntuación: 9.5, 2h 25m</p>
                <button className="btn-buscar">Buscar Asiento</button>
            </div>
        </div>
    );
}