import React from "react";
import '../styles/styles.css'
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MovieList } from "../components/MovieList";

export const Movies = () => {


    return (
        <div className="principal">
            <div className="col-12">
                <Header/>
                <MovieList/>
                <Footer/>
            </div>
        </div>
            
    );

};