import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeList.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://YOUR_EC2_PUBLIC_IP/api/recipes/')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
            <div className="recipe-info">
              <span>Preparation Time: {recipe.prepTime}</span>
              <span>Cooking Time: {recipe.cookTime}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
