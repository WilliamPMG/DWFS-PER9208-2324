import React from "react";
import {Movie} from "../components/Movie";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const MovieList = () => {
    const movieList = [
        { name: "The Godfather", image: "https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", duration: 175, genre: "Drama", rating: 9.2 },
        { name: "The Godfather: Part II", image: "https://www.themoviedb.org/t/p/w1280/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg", synopsis: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.", duration: 202, genre: "Drama", rating: 9.0 },
        { name: "The Dark Knight", image: "https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg", synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", duration: 152, genre: "Action", rating: 9.0 },
        { name: "12 Angry Men", image: "https://www.themoviedb.org/t/p/w1280/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg", synopsis: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.", duration: 96, genre: "Drama", rating: 8.9 },
        { name: "Schindler's List", image: "https://www.themoviedb.org/t/p/w1280/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", synopsis: "In 1953, Oskar Schindler, a Polish Jewish, brothers-in-law, tries to prevent Jewish sentenced to death for his Jewish crime family.", duration: 195, genre: "Drama", rating: 8.9 },
        { name: "Pulp Fiction", image: "https://www.themoviedb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", duration: 154, genre: "Drama", rating: 8.9 },
        { name: "The Lord of the Rings: The Return of the King", image: "https://www.themoviedb.org/t/p/w1280/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg", synopsis: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", duration: 201, genre: "Fantasy", rating: 8.9 }
    ];

    return (
        <div>
            <Header/>
            <div className="movie-list">
                {movieList.map((movie, key) => <Movie key={key} movie={movie}/>)}
            </div>
            <Footer/>
        </div>
    );
}
