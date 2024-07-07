import React from "react";

function Movie({ title, image, synopsis, duration, genre, rating }) {
    return (
        <div className="card h-100">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{synopsis}</p>
                <p className="card-text"><small className="text-muted">Duración: {duration}</small></p>
                <p className="card-text"><small className="text-muted">Género: {genre}</small></p>
                <p className="card-text"><small className="text-muted">Puntuación: {rating}/10</small></p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary w-100">
                    Seleccionar asientos
                </button>
            </div>
        </div>
    );
}

export default Movie;