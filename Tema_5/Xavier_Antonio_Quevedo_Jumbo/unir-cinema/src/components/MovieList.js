import React from "react";
import {Movie} from "../components/Movie";

export const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
};