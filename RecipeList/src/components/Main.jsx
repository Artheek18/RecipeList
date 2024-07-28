import React, { useEffect, useState } from 'react';
import './main.css';

function Main() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://YOUR_EC2_PUBLIC_IP/api/recipes/')
            .then(response => response.json())
            .then(data => setRecipes(data));
    }, []);

    return (
        <main className="main">
            <h2>Recipes</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>{recipe.name}</li>
                ))}
            </ul>
        </main>
    );
}

export default Main;