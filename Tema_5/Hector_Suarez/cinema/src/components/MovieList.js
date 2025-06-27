import React from "react";
import { Movie } from "../components/Movie";
import data_pelis from "../wikipedia-mov-2020s";


export const MovieList = () => {
    let random_pelis = new Set();
    for (let index = 0; index < 12; index++) {
        const x = Math.floor(Math.random() * data_pelis.length)
        random_pelis.add(data_pelis[x]);
    }
    random_pelis = Array.from(random_pelis);
    const listItems = random_pelis.map((peli, index) =>
        <div className="column is-3 is-narrow" key={index+1}>
            <Movie datosPelicula={peli} />
        </div>
    );

    return (
        <div className="container is-fluid">
            <div className="columns is-multiline">
                {listItems}
            </div>
        </div>
    );
}