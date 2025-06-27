import React, { useState, useEffect } from "react";
import { Movie } from "../components/Movie";

export const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const getMovieRequest = async () => {
        setSpinner(true);
        const url = `https://www.omdbapi.com/?s=star wars&apikey=263d22d8`;
        const response = await fetch(url);
        const responseJson = await response.json();
        console.log('movies', responseJson);
        if (responseJson.Search) {
            setSpinner(false);
            setMovies(responseJson.Search);
        }
    };

    
    useEffect(() => {
        getMovieRequest();
    }, []);//se ejecuta solo una vez.

    const [spinner, setSpinner] = useState(false);

    return (
        <div>
            <h1>Star Wars Movies</h1>
            <h2 className="center-text">Peliculas Disponibles</h2>
            {spinner && (
                <p>cargando peliculas...</p>
            )}
            <div className="row center-text">
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        title={movie.Title}
                        year={movie.Year}
                        image={movie.Poster
                        }
                    />
                ))}
            </div>
        </div>
    );
}