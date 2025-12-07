import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import availableLabels from "../data/availableLabels.json";
import "./MainPage.css";

function MainPage() {
  const navigate = useNavigate();

  const handleLabelClick = (label) => {
    navigate(`/recipes/${label}`);
  };

  return (
    <div className="main-layout">
      <Header title="The creative pantry" />
      <nav className="categories-navbar">
        {availableLabels.map((label) => (
          <button
            key={label}
            className="category-item"
            onClick={() => handleLabelClick(label)}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default MainPage;
