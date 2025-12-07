import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={recipe.images[0].url} />
      </div>
      <div className="card-text-container">
        <h2>{recipe.title}</h2>
        <p>{recipe.summary}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
