import React from "react";

export const Movie = ({titulo, imagen,sinopsis, duracion,genero,puntuacion }) => {
    return (
        <div className="pelicula">
            <h3>{titulo}</h3>
            <img src={imagen} alt={imagen}/>
            <p className="desc"><b>Sinopsis:</b> {sinopsis}</p>
            <p><b>Duración:</b> {duracion} min </p>
            <p><b>Género:</b> {genero} </p>
            <p><b>Puntuación:</b> {puntuacion}/100 </p>
            <button>Reservar</button>
        </div>
    );
}