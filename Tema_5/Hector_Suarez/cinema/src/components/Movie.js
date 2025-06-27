import React from "react";


export const Movie = (props) => {
    const { datosPelicula } = props;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={datosPelicula.thumbnail} width={datosPelicula.thumbnail_width} height={datosPelicula.thumbnail_height} alt={datosPelicula.title}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <p><strong>{datosPelicula.title}</strong></p>
                    <p>{datosPelicula.extract}</p>
                    <p>Año: {datosPelicula.year}</p>
                    <p>Género: {datosPelicula.genres.join(', ')}</p>
                    <p>Elenco: {datosPelicula.cast.join(', ')}</p>
                </div>
            </div>
            <footer className="card-footer">
                <a href="#asientos" className="card-footer-item">Asientos</a>
            </footer>
        </div>
    );
}