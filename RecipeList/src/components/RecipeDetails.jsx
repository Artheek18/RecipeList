import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://YOUR_EC2_PUBLIC_IP/api/recipes/${id}`)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail">
      <h2>{recipe.name}</h2>
      <img src={recipe.imageUrl} alt={recipe.name} />
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <div className="ingredients">
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <h3>Instructions</h3>
      <div className="instructions">
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
