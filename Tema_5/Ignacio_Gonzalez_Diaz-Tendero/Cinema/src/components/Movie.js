import React from "react";

export const Movie = ({title, imagen, overview, runtime, genres, vote_average}) => {
    const limitarContenido = (texto, limite) => {
        if (texto.length <= limite) {
            return texto;
        } else {
            return texto.substring(0, limite) + '...';
        }
    };

    return (
        <div className="card">
            <span className="card-title">{title}</span>
            <div className="card-image">
                <img src={imagen} alt={title}/>
            </div>
            <div className="card-content">
                <p>{limitarContenido(overview, 350)}</p>
            </div>
            <div className="card-action">
                <p>Duración: {runtime}</p>
                <p>Género: {genres}</p>
                <p>Puntuación: {vote_average}</p>
            </div>
            <div className="card-action">
            </div>
            <a href="#" className="waves-effect waves-light btn modal-trigger btn-seleccionar"
               data-target="registerModal" style={{marginTop: 'auto'}}>Seleccionar Butacas</a>

        </div>

    );
}
