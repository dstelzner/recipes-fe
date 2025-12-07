import { Navigate, useParams } from "react-router-dom";
import Header from "../components/common/Header";
import "./RecipeListPage.css";
import RecipeList from "../components/recipe/RecipeList";

function RecipeListPage() {
  const { label, name } = useParams();

  // TODO CALL BACKEND
  const recipes = [
    {
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
      labels: ["Cake"],
      chef: { name: "Daiane Stelzner", id: "1" },
    },
    {
      id: "user-2",
      title: "Bolo de Banana",
      summary:
        "Bolo de banana simples gostoso e Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      ingredients: ["Banana", "Leite", "Ovos", "Farinha", "Manteiga"],
      steps: ["Adicione tudo numa panela", "Leve ao fogo médio", "Cozinhe"],
      images: [
        {
          url: "https://comidinhasdochef.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/Bolo-de-Banana-Invertido.jpg.webp",
          isThumbnail: false,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
      labels: ["Cake"],
      chef: { name: "Daiane Stelzner", id: "1" },
    },
  ];

  let imgUrl = "";

  switch (label) {
    case "cake":
      imgUrl =
        "https://www.receiteria.com.br/wp-content/uploads/bolo-de-aniversario.jpeg";
      break;
    case "Pie":
      imgUrl =
        "https://www.receiteria.com.br/wp-content/uploads/torta-de-morango-capa.jpeg";
      break;
    case "Poultry":
      imgUrl =
        "https://blog.biglar.com.br/wp-content/uploads/2021/05/WLF_9480.jpg";
      break;
    case "Beef":
      imgUrl =
        "https://paolacarosella.com.br/cms/wp-content/uploads/2024/02/Carne-Assada.jpg";
      break;
    case "Pasta":
      imgUrl =
        "https://sabores-new.s3.amazonaws.com/public/2024/11/prato_branco_com_macarrao.webp";
      break;
    default:
      imgUrl = undefined;
      break;
  }

  if (!imgUrl) return <Navigate to="/" />;
  return (
    <div className="recipe-list-layout">
      <Header title={label} images={imgUrl ? [{ url: imgUrl }] : []} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default RecipeListPage;
