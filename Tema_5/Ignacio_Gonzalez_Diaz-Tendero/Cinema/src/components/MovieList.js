import React from "react";
import {Movie} from "./Movie";



export const MovieList = ({movies}) => {
    // console.log(movies)
    return (
        <div className="cartelera-container">
                {movies.map((movie, index) => (

                    <Movie
                        key={index}
                        title={movie.title}
                        imagen={movie.imagen}
                        overview={movie.overview}
                        runtime={movie.runtime}
                        genres={movie.genres}
                        vote_average={movie.vote_average}
                    />
                ))}
        </div>

    )
}