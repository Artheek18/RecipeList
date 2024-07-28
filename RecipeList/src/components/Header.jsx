import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Recipe List</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
        </header>
    );
}

export default Header;