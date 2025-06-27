import { Movie } from '../movie/movie'
import './movieList.css'
import { useState } from 'react'

export const MovieList = ({movies}) => {

    return(
        <div className='movies'>
            {movies.map((movie)=>{
                return (
                    <Movie 
                    titulo={movie.titulo} 
                    sinopsis={movie.sinopsis} 
                    duracion={movie.duracion} 
                    genero={movie.genero} 
                    puntuacion={movie.puntuacion} 
                    imagen={movie.imagen}/>
                )
            })}
        </div>
    )
}