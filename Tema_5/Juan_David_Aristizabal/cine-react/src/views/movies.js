import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <MovieList />
            <Footer />
        </div>
    );
}

export default App;

