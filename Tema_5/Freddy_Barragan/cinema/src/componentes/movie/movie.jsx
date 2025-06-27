import './movie.css'
import carrete from './../../assets/carrete-de-pelicula.png'
import { useState } from 'react'

export const Movie = ({titulo, sinopsis, duracion, genero, puntuacion, imagen}) => {
    
    const [infoClass, setInfoClass] = useState('hide')
    const [blurImg, setBlurImg] = useState('')

    return(
        <div className='movie' 
            onMouseOver={()=>{
                setInfoClass('show')
                setBlurImg('blur')
            }} 
            onMouseOut={()=>{
                setInfoClass('hide')
                setBlurImg('')
            }}
            >
            <img className={`movie__Img ${blurImg}`} src={imagen} alt={titulo} />
            <div className={`movie__Info ${infoClass}`}>
                <h3>{titulo}</h3>
                <p>Sinopsis: {sinopsis}</p>
                <p>Duración: {duracion}</p>
                <p>Genero: {genero}</p>
                <p>Puntuacion: {puntuacion}</p>
                <button>Comprar</button>
            </div>
        </div>
    )
}