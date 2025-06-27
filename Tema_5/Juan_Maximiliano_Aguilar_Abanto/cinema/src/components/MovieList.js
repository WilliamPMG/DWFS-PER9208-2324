import React, { useState, useEffect } from 'react';
import {Movie}  from "./Movie";

export const MovieList = () =>
{
    //No usado porque se hace llamadas por fetch
    const peliculas = [
        {
            titulo: "The Matrix",
            imagen: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            sinopsis: "Thomas A. Anderson, un joven pirata informático que lleva una doble vida: durante el día ejerce en una empresa de servicios informáticos, mientras que en las noches se hace llamar Neo y se dedica a piratear bases de datos e invadir sistemas de alta seguridad.",
            duracion:"2h 16m",
            genero:"movie",
            puntuación: "4.5"
        },
        {
            titulo:"The Matrix Reloaded",
            imagen:"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            sinopsis:"Los luchadores por la libertad Neo, Trinity y Morfeo siguen liderando la revuelta contra el ejército de las máquinas, desplegando su arsenal de habilidades y armas extraordinarias contra las fuerzas sistemáticas de represión y explotación.",
            duracion:"2h 22m",
            genero:"movie",
            puntuación:"4.7"
        },
        {
            titulo: "The Matrix Revolutions",
            imagen:"https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            sinopsis:"La ciudad humana de Zion se defiende de la invasión masiva de las máquinas, mientras Neo lucha por acabar con la guerra en otro frente, al tiempo que se opone al malvado agente Smith.",
            duracion:"2h 20m",
            genero:"movie",
            puntuación:"4.9"
        }
    ]

    const [peliculasCine, setPeliculas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "https://www.omdbapi.com/?s=matrix&apikey=36a91be8&page=1";
            const fetchResponse = await fetch(url);
            const peliculasWebService = await fetchResponse.json();
            const peliculasResultado = peliculasWebService.Search;
            setPeliculas(peliculasResultado);
        };

        fetchData();
    }, []);


    return ( <div className="principal__butacas">
                {peliculasCine.map((peliculaServicio,index) =>
                (
                    <Movie 
                        key={index}
                        pelicula={peliculaServicio}
                    />
                ))}

        </div>);
}

