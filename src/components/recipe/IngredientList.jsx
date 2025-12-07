import { useState } from "react";
import "./IngredientList.css";

function IngredientList({ ingredients }) {
  const [checked, setChecked] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setChecked((prev) => [...prev, value]);
    } else {
      setChecked((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div className="ingredient-list">
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>
            <label>
              <input type="checkbox" onChange={handleChange} />
              {ingredient}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;
