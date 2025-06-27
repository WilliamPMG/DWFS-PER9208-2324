import React from "react";


export const Movie = ({pelicula}) =>
{
    return (
        <div className="card">
            <h3 className="card__titulo">{pelicula.Title}</h3>
            <img src={pelicula.Poster} alt={pelicula.Title}/>
            <p className="card__sinopsis">Thomas A. Anderson, un joven pirata informático que lleva una doble vida: durante el día ejerce en una empresa de servicios informáticos, mientras que en las noches se hace llamar Neo y se dedica a piratear bases de datos e invadir sistemas de alta seguridad.</p>
            <p className="card__item" >Duración: {pelicula.Year}</p>
            <p className="card__item" >Género: {pelicula.Type}</p>
            <p className="card__item" >Puntuación: 5</p>
            <div className="d-flex justify-content-center"><button className="btn btn-success" type="button">Seleccionar Butacas</button></div>
        </div>
    )
}

