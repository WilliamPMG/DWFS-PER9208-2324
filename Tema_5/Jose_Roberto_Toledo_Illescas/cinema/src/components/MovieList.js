import {Movie} from "./Movie";
import React from "react";

export const MovieList = () => {
    const movies  = [
        {
            titulo: "GARFIELD FUERA DE CASA", 
            imagen: "https://wsvistawebclient.multicines.com.ec/CDN/media/entity/get/FilmPosterGraphic/HO00001086?referenceScheme=Cinema1715155207507",
            sinopsis: "El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su largamente perdido padre –el desaliñado gato callejero Vic– Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un hilarante y muy arriesgado atraco", 
            duracion: 115, 
            genero : "Animada", 
            puntuacion: 90
        },
        {
            titulo: "PLANETA SIMIOS 4", 
            imagen: "https://wsvistawebclient.multicines.com.ec/CDN/media/entity/get/FilmPosterGraphic/HO00001087?referenceScheme=Cinema1715241607173",
            sinopsis: "Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual.", 
            duracion: 155, 
            genero : "Ficción", 
            puntuacion: 100
        },
        {
            titulo: "ARTHUR AMISTAD SIN LIMITES", 
            imagen: "https://wsvistawebclient.multicines.com.ec/CDN/media/entity/get/FilmPosterGraphic/HO00001076?referenceScheme=Cinema1715241607173",
            sinopsis: "sinopDescubre la fascinante historia de Mikael Lindnord (Mark Wahlberg) un deportista de resistencia sueco que se ganó los corazones de millones de personas cuando él y su equipo adoptaron a Arthur, un perro callejero mal herido de gran corazón que les acompañó durante un épico campeonato mundial de aventuras extremassis", 
            duracion: 120, 
            genero : "Familiar", 
            puntuacion: 85
        },
        {
            titulo: "A TUS ESPALDAS", 
            imagen: "https://wsvistawebclient.multicines.com.ec/CDN/media/entity/get/FilmPosterGraphic/HO00001101?referenceScheme=Cinema1715241607173",
            sinopsis: "Jorge Chicaiza Cisneros, un empleado de un banco, niega sus orígenes humildes y su herencia mestiza. Conoce a una joven colombiana, Greta, con la que comparte el deseo de poseer riqueza sin importar los medios que utilicen para su obtención.", 
            duracion: 90, 
            genero : "Ficción, +15 años", 
            puntuacion: 70
        }
    ];

    return (
        <div className="cuadricula"> 
            {movies.map((movie, index) => (
                <Movie
                key={index}
                titulo={movie.titulo}
                imagen={movie.imagen}
                sinopsis={movie.sinopsis}
                duracion={movie.duracion}
                genero={movie.genero}
                puntuacion={movie.puntuacion}
                />
            ))}
        </div>
    );
}