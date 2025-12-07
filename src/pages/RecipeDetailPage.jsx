import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeHeader from "../components/recipe/RecipeHeader";
import "./RecipeDetailPage.css";
import Summary from "../components/recipe/Summary";
import IngredientList from "../components/recipe/IngredientList";
import StepList from "../components/recipe/StepList";

function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Lógica para buscar a receita por ID na API (fetch/axios)
    // 2. setRecipe(dadosRecebidos);
    // 3. setLoading(false);
    setRecipe({
      id: "user-1",
      title: "Bolo de Chocolate",
      summary:
        "Bolo de chocolate simples gostoso e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ingredients: ["Chocolate", "Leite", "Ovos", "Farinha", "Manteiga"],
      steps: ["Adicione tudo numa panela", "Leve ao fogo médio", "Cozinhe"],
      images: [
        {
          url: "https://assets.unileversolutions.com/recipes-v3/164246-default.jpg?im=AspectCrop=(625,469);Resize=(625,469)",
          isThumbnail: false,
        },
        {
          url: "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1-702x336.jpg",
          isThumbnail: false,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
      labels: ["Bolo", "Chocolate"],
      chef: { name: "Daiane Stelzner", id: "1" },
    });

    setLoading(false);
  }, [id]);

  if (loading) {
    return <h1>Carregando Receita...</h1>;
  }
  if (!recipe) {
    return <h1>Receita não encontrada.</h1>;
  }

  return (
    <div className="recipe-detail-layout">
      <RecipeHeader
        images={recipe.images}
        title={recipe.title}
        chefName={recipe.chef.name}
      />
      <div className="content-columns">
        <Summary summary={recipe.summary} tags={recipe.labels} />
        <div className="instructions-section">
          <IngredientList ingredients={recipe.ingredients} />
          <StepList steps={recipe.steps} />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
