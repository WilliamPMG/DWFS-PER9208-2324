import React, {useState, useEffect}  from "react";
import '../styles/styles.css';
import {
   Grid, GridColumn
} from "semantic-ui-react";
import fetchMovies from "../services/movieService";
import {Movie} from "../components/Movie";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Overview = () => {
    const [movies, setMovies] = useState([]);

    const getMovies = async (pageNumber = 1) => {
        try {
            const response = await fetchMovies(pageNumber);
            setMovies(response);
        } catch (error) {
            console.error('Error al obtener peliculas:', error);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return(
       <div className={"container-lg night"}>
           <Header/>
           <Grid columns={"three"} doubling stackable>
               {movies.slice(0,5).map((movie, index) => (
                   <GridColumn key={index}>
                       <Movie
                           title={movie.title}
                           overview={movie.overview}
                           poster_path={movie.poster_path}
                           release_date={movie.release_date}
                           vote_average={movie.vote_average}
                       />
                   </GridColumn>
               ))}
           </Grid>
           <Footer/>
       </div>
    )
}
