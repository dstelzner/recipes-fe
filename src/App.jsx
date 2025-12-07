// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterUserPage from "./pages/RegisterUserPage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import HeaderOutline from "./components/common/HeaderOutline";
import SearchingBar from "./components/common/SearchingBar";
import MainPage from "./pages/MainPage";
import RecipeListPage from "./pages/RecipeListPage";

function App() {
  return (
    <BrowserRouter>
      <SearchingBar />
      <HeaderOutline />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recipes/:label" element={<RecipeListPage />} />
          <Route path="/register" element={<RegisterUserPage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
