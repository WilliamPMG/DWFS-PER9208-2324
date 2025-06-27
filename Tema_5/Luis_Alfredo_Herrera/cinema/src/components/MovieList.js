import {Movie} from "./Movie";
import React from "react";

export const MovieList = () => {
    const moviesList = [
        {
            titulo: "PLANETA SIMIOS 4",
            images: "https://wsvistawebclient.multicines.com.ec/CDN/media/entity/get/FilmPosterGraphic/HO00001087?referenceScheme=Cinema1714550408186",
            sinopsis: "Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual.",
            duracion: 245,
            genero: "Terror. Intriga. Thriller. Fantástico",
            puntuacion: 8.5
        },
        {
            titulo: "GARFIELD FUERA DE CASA",
            images: "https://wsvistawebclient.multicines.com.ec/CDN/media/entity/get/FilmPosterGraphic/HO00001086?referenceScheme=Cinema1714550408187",
            sinopsis: "El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su largamente perdido padre –el desaliñado gato callejero Vic– Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un hilarante y muy arriesgado atraco.",
            duracion: 120,
            genero: "Animación. Acción. Aventuras. Fantástico. Comedia",
            puntuacion: 7.9
        },
        {
            titulo: "PROFESION PELIGRO",
            images: "https://wsvistawebclient.multicines.com.ec/CDN/media/entity/get/FilmPosterGraphic/HO00001085?referenceScheme=Cinema1714550408187",
            sinopsis: "Es doble de acción y, como todo el mundo en la comunidad de dobles de acción, explota, recibe disparos, se estrella, atraviesa ventanas y cae desde las mayores alturas, todo para nuestro entretenimiento. Y ahora, recién salido de un accidente que casi acaba con su carrera, este héroe de clase trabajadora tiene que localizar a una estrella de cine desaparecida, resolver una conspiración e intentar recuperar al amor de su vida sin dejar de hacer su trabajo diario. ¿Qué podría salir bien?.",
            duracion: 100,
            genero: "Animación. Aventuras. Ciencia ficción",
            puntuacion: 10.0
        },
        {
            titulo: "QUE TAN LEJOS",
            images: "https://wsvistawebclient.multicines.com.ec/CDN/media/entity/get/FilmPosterGraphic/HO00001098?referenceScheme=Cinema1714550408187",
            sinopsis: "Esperanza y Teresa tienen que llegar a Cuenca. Sin embargo, el ómnibus que tienen que tomar se retrasa debido a una huelga obrera. Las dos mujeres deciden viajar entonces por su cuenta, haciendo autostop hasta llegar a Cuenca. A lo largo del camino encuentran curiosos personajes que les hacen replantearse el propósito de su viaje. El nuevo itinerario las lleva de la ilusión al desencanto y de allí al deslumbramiento de una identidad que está más cerca de si mismas mientras más lejos les lleva el camino.",
            duracion: 200,
            genero: "Musical. Comedia. Romance",
            puntuacion: 8.5
        },
    ];

    return (
        <div className="cartelera-container">
            {moviesList.map((movie, index) => (
                <Movie
                    key={index}
                    titulo={movie.titulo}
                    imagen={movie.images}
                    sinopsis={movie.sinopsis}
                    duracion={movie.duracion}
                    genero={movie.genero}
                    puntuacion={movie.puntuacion}
                    boton={movie.boton}
                />
            ))}
        </div>
    );
}