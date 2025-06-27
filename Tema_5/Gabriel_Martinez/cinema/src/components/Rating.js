import React from "react";
import '../styles/Rating.css'
export const Rating = ({rating}) => {

    const percentage = String(rating * 100 / 5) + '%';

    return (
        <div>
            <div className="stars-outer">
                <div className="stars-inner" style={{width: percentage}}></div>
            </div>
            <span> ({rating}/5.0)</span>
        </div>
    );
}