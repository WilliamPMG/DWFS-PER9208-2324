import React from 'react';

export const Header = ({ onChange }) => {
    const handleInputChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <header className="header-footer">
            <h1 className="header-footer-text">UNIR-CINEMA</h1>
            <input
                type="text"
                placeholder="Buscar películas..."
                className="search-input"
                onChange={handleInputChange}
            />
        </header>
    );
};
