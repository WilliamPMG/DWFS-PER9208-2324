import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import '../styles/styles.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {MovieList} from "../components/MovieList";



export const Overview = () => {

// CARTELERA ESTATICA
    // const movies = [
    //     {
    //         title: "Star Wars: Episodio I - La amenaza fantasma",
    //         imagen: "https://m.media-amazon.com/images/I/61+lrYp-EIL.jpg",
    //         overview: "La Federación de Comercio ha bloqueado el pequeño planeta de Naboo, gobernado por la joven Reina Amidala, como parte de un plan ideado por Sith Darth Sidious, que manteniéndose en el anonimato dirige a los neimoidianos, que están al mando de la Federación. Amidala es convencida por los Jedis Qui-Gon Jinn y su aprendiz, Obi-Wan Kenobi, a viajar hasta Coruscant, capital de la República y sede del Consejo Jedi, para intentar mediar en el conflicto.",
    //         runtime: "2h 16m",
    //         genres: "Ciencia ficción",
    //         vote_average: 4.5
    //     },
    //     {
    //         title: "Star Wars: Episodio II - El ataque de los clones",
    //         imagen: "https://m.media-amazon.com/images/I/71iv84j6ePL.jpg",
    //         overview: "La República Galáctica está en crisis. Un movimiento separatista, formado por centenares de planetas y poderosas alianzas de poderes malignos, amenaza la galaxia. Ni siquiera los Jedi parecen capaces de conjurar el peligro. Este movimiento está liderado por el misterioso conde Dooku, un ex caballero Jedi que ha abandonado la Orden.",
    //         runtime: "2h 22m",
    //         genres: "Ciencia ficción",
    //         vote_average: 4.7
    //     },
    //     {
    //         title: "Star Wars: Episodio III - La venganza de los Sith",
    //         imagen: "https://m.media-amazon.com/images/I/71MKj4j-isL._AC_UF894,1000_QL80_DpWeblab_.jpg",
    //         overview: "La guerra de los clones ha estallado y los Jedi lideran el ejército de la República contra las fuerzas de los separatistas. Obi-Wan Kenobi y Anakin Skywalker son enviados a una misión para rescatar al Canciller Palpatine, secuestrado por los separatistas. Anakin descubre que el Canciller es el Sith Lord Darth Sidious, y que los Jedi son en realidad sus enemigos.",
    //         runtime: "2h 20m",
    //         genres: "Ciencia ficción",
    //         vote_average: 4.9
    //     },
    //     {
    //         title: "Star Wars: Episodio IV - Una nueva esperanza",
    //         imagen: "https://m.media-amazon.com/images/I/8104RMlgxWL._AC_UF894,1000_QL80_.jpg",
    //         overview: "La princesa Leia, líder del movimiento rebelde que desea reinstaurar la República en la galaxia en los tiempos ominosos del Imperio, es capturada por las malévolas Fuerzas Imperiales, capitaneadas por el implacable Darth Vader, el sirviente más fiel del Emperador. El intrépido y joven Luke Skywalker, ayudado por Han Solo, capitán de la nave espacial \"El Halcón Milenario\", y los androides, R2D2 y C3PO, serán los encargados de luchar contra el enemigo y rescatar a la princesa para volver a instaurar la justicia en el seno de la galaxia.",
    //         runtime: "2h 1m",
    //         genres: "Ciencia ficción",
    //         vote_average: 4.2
    //     }
    //
    // ];

// BUSQUEDA DINAMICA
    const apiKey = '5cf75e5ba8a23d9bb399e4e4ba4885a1';
    const [searchQuery, setSearchQuery] = useState('Star Wars'); // Para la semana que viene
    const handleSearchChange = (newValue) => {
        setSearchQuery(newValue);
    };

// const searchQuery = 'Star Wars';
    const buscarPeliculas = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(searchQuery)}`);
            const data = await response.json();
            const moviesData = data.results;

            const moviesDetailsPromises = moviesData.map((movie, index) => (
                new Promise(resolve => setTimeout(() => {
                    fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}`)
                        .then(response => response.json())
                        .then(movieDetails => {
                            const {title, overview, runtime, genres, vote_average, poster_path} = movieDetails;
                            if (poster_path !== null) {
                                const imagen = `https://image.tmdb.org/t/p/w500/${poster_path}`;

                                const pelicula = {
                                    title,
                                    imagen,
                                    overview,
                                    runtime,
                                    genres: genres.map(genre => genre.name),
                                    vote_average
                                };
                                resolve(pelicula);
                            } else {
                                resolve(null);
                            }
                        })
                        .catch(error => {
                            console.error('Error al obtener detalles de la película:', error);
                            resolve(null);
                        });
                }, index * 10)) // Agrega un retraso de 10 milisegundos por cada película
            ));

            const moviesDetails = await Promise.all(moviesDetailsPromises);
            // Filtrar las películas que no sean null
            return moviesDetails.filter(movie => movie !== null);

        } catch (error) {
            console.error('Error al buscar películas:', error);
            // En caso de error, devolver una lista vacía
            return [];
        }
    };


    buscarPeliculas()
        .then(movies => {
            ReactDOM.render(
                <div>
                    <Header onChange={handleSearchChange}/>
                    <MovieList movies={movies}/>
                    <Footer/>
                </div>,
                document.getElementById('root')
            );
        });
}