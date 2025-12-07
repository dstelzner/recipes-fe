// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterUserPage from "./pages/RegisterUserPage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import Header from "./components/common/Header";
import SearchingBar from "./components/common/SearchingBar";

function App() {
  return (
    <BrowserRouter>
      <SearchingBar />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<RegisterUserPage />} />
          <Route path="/add-recipe" element={<AddRecipePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
