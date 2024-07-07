import React from "react";
import Movie from './Movie';
import { movies } from '../moviesData';

function MovieList() {

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {movies.map((movie, index) => (
                    <div key={index} className="col">
                        <Movie {...movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;