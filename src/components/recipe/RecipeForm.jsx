import React, { useState } from "react";
import "./RecipeForm.css";
import defaultLabels from "../../data/availableLabels.json";

function RecipeForm({ availableLabels }) {
  // TODO CALL BACKEND

  const labels =
    availableLabels && availableLabels.length > 0
      ? availableLabels
      : defaultLabels;

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    ingredients: [],
    steps: [],
    images: [],
    labels: [],
  });

  const [currentIngredient, setCurrentIngredient] = useState("");
  const [currentStep, setCurrentStep] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddItem = (field, value, setter) => {
    if (!value.trim()) return;
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], value],
    }));
    setter("");
  };

  const handleRemoveItem = (field, index) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: prevData[field].filter((_, i) => i !== index),
    }));
  };

  const handleLabelToggle = (label) => {
    setFormData((prevData) => {
      const isSelected = prevData.labels.includes(label);
      return {
        ...prevData,
        labels: isSelected
          ? prevData.labels.filter((l) => l !== label)
          : [...prevData.labels, label],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.summary ||
      formData.steps.length === 0 ||
      formData.ingredients.length === 0 ||
      formData.images.length === 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`Recipe "${formData.title}" registered successfully! (Simulated)`);

    setFormData({
      title: "",
      summary: "",
      ingredients: [],
      steps: [],
      images: [],
      labels: [],
    });
  };

  return (
    <div className="recipe-form-container">
      <h2 className="recipe-form-title">Add Recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        <label htmlFor="title" className="recipe-form-label">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="recipe-form-input"
        />

        <label htmlFor="summary" className="recipe-form-label">
          Summary:
        </label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          required
          className="recipe-form-textarea"
        />

        <div className="form-section">
          <label className="recipe-form-label">Ingredients:</label>
          <div className="input-group">
            <input
              type="text"
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
              placeholder="Add an ingredient"
              className="recipe-form-input"
            />
            <button
              type="button"
              onClick={() =>
                handleAddItem(
                  "ingredients",
                  currentIngredient,
                  setCurrentIngredient,
                )
              }
              className="recipe-form-button"
            >
              Add
            </button>
          </div>
          <ul className="item-list">
            {formData.ingredients.map((ingredient, index) => (
              <li key={index} className="list-item">
                {ingredient}
                <button
                  type="button"
                  onClick={() => handleRemoveItem("ingredients", index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="form-section">
          <label className="recipe-form-label">Steps:</label>
          <div className="input-group">
            <textarea
              value={currentStep}
              onChange={(e) => setCurrentStep(e.target.value)}
              placeholder="Add a step"
              className="recipe-form-textarea"
            />
            <button
              type="button"
              onClick={() =>
                handleAddItem("steps", currentStep, setCurrentStep)
              }
              className="recipe-form-button"
            >
              Add
            </button>
          </div>
          <ol className="item-list">
            {formData.steps.map((step, index) => (
              <li key={index} className="list-item">
                {step}
                <button
                  type="button"
                  onClick={() => handleRemoveItem("steps", index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="form-section">
          <label className="recipe-form-label">Images (URL):</label>
          <div className="input-group">
            <input
              type="text"
              value={currentImage}
              onChange={(e) => setCurrentImage(e.target.value)}
              placeholder="Add image URL"
              className="recipe-form-input"
            />
            <button
              type="button"
              onClick={() =>
                handleAddItem("images", currentImage, setCurrentImage)
              }
              className="recipe-form-button"
            >
              Add
            </button>
          </div>
          <div className="image-preview-list">
            {formData.images.map((image, index) => (
              <div key={index} className="image-preview-item">
                <img
                  src={image}
                  alt={`Preview ${index}`}
                  className="image-preview"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveItem("images", index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label className="recipe-form-label">Labels:</label>
          <p className="label-helper-text">
            Select all categories that apply to this recipe
          </p>
          <div className="labels-grid">
            {labels.map((label) => (
              <label key={label} className="label-checkbox">
                <input
                  type="checkbox"
                  checked={formData.labels.includes(label)}
                  onChange={() => handleLabelToggle(label)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
          {formData.labels.length > 0 && (
            <div className="selected-labels">
              <strong>Selected:</strong>{" "}
              {formData.labels.map((label, index) => (
                <span key={label} className="selected-label-tag">
                  {label}
                  {index < formData.labels.length - 1 && ", "}
                </span>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="recipe-form-button">
          Create recipe
        </button>
      </form>
    </div>
  );
}

export default RecipeForm;
