import {useState} from "react";
import {Rating} from "./Rating";
import '../styles/Movie.css'

export const Movie = ({title, image, synopsis, duration, genres, rating}) => {

    const [showFullSynopsis, setShowFullSynopsis] = useState(false);
    const synopsisMaxLength = 400;

    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={image} className='movie-poster' alt={title}/>
                </div>
                <div className='card-back'>
                    <div className='card-body'>
                        <h3>{title}</h3>
                        <Rating rating={rating}/>
                        <p><b>Duration:</b> {duration}</p>
                        <p><b>Genres:</b> {genres}</p>
                        <div className='synopsis-container'>
                            {synopsis.length > synopsisMaxLength ?
                                <p>
                                    {showFullSynopsis ? synopsis : synopsis.slice(0, synopsisMaxLength) + '...'}
                                    {showFullSynopsis ?
                                        <span onClick={() => setShowFullSynopsis(false)}>
                                        <b> Mostrar menos</b>
                                    </span> :
                                        <span onClick={() => setShowFullSynopsis(true)}>
                                        <b> Mostrar más</b>
                                    </span>
                                    }
                                </p> :
                                <p>{synopsis}</p>
                            }
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn'>Reservar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}