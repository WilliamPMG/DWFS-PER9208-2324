import React from 'react';
import '../styles/styles.css';
import {MovieList} from "../components/MovieList";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";


export const Movies = () => {
    const moviesData = [
        {
            id: 1,
            title: 'The Shawshank Redemption',
            image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/vdVab7yNvgYEMd8shCfy2D6nTMu.jpg',
            synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            duration: '2h 22min',
            genre: 'Drama',
            rating: 9.3,
        },
        {
            id: 2,
            title: 'The Godfather',
            image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/5HlLUsmsv60cZVTzVns9ICZD6zU.jpg',
            synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            duration: '2h 55min',
            genre: 'Crime, Drama',
            rating: 9.2,
        },
        {
            id: 3,
            title: 'The Dark Knight',
            image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/rrS7K8tXVFUBliIKWaRuSq65nWr.jpg',
            synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            duration: '2h 32min',
            genre: 'Action, Crime, Drama',
            rating: 9.0,
        },
        {
            id: 4,
            title: 'Schindler\'s List',
            image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xnvHaMFNXzemoH4uXHDMtKnpF7l.jpg',
            synopsis: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
            duration: '3h 15min',
            genre: 'Biography, Drama, History',
            rating: 8.9,
        },
        {
            id: 5,
            title: 'Pulp Fiction',
            image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/hNcQAuquJxTxl2fJFs1R42DrWcf.jpg',
            synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
            duration: '2h 34min',
            genre: 'Crime, Drama',
            rating: 8.9,
        },
        {
            id: 6,
            title: 'The Lord of the Rings: The Return of the King',
            image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/QO5OYEHAcB3DUZju3j9mFm1BfF.jpg',
            synopsis: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
            duration: '3h 21min',
            genre: 'Adventure, Drama, Fantasy',
            rating: 8.9,
        },
        {
            id: 7,
            title: 'Fight Club',
            image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1h6t9nCYVWOLRskB35K51payMok.jpg',
            synopsis: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
            duration: '2h 19min',
            genre: 'Drama',
            rating: 8.8,
        },
        {
            id: 8,
            title: 'Forrest Gump',
            image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oiqKEhEfxl9knzWXvWecJKN3aj6.jpg',
            synopsis: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
            duration: '2h 22min',
            genre: 'Drama, Romance',
            rating: 8.8,
        },
        {
            id: 9,
            title: 'Inception',
            image: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sNxqwtyHMNQwKWoFYDqcYTui5Ok.jpg',
            synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            duration: '2h 28min',
            genre: 'Action, Adventure, Sci-Fi',
            rating: 8.8,
        },
    ];

    return (
        <div className="App">
            <Header/>
            <main>
                <MovieList movies={moviesData}/>
            </main>
            <Footer/>
        </div>
    );
}
