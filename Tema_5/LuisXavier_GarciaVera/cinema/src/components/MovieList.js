import Movie from './Movie';
import DataMovie from '../services/GetMovies'
import '../styles/Movie.css'

export default function MovieList() {
    return (
        <div className="movie-container">
            {DataMovie.map((data) => (
                <Movie key={data.imdbID} data={data} />
            ))}
        </div>
    );
};
