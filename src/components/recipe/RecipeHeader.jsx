import React, { useState } from "react";
import "./RecipeHeader.css";

function RecipeHeader({ images, title, chefName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="no-images">
        Nenhuma imagem disponível para esta receita.
      </div>
    );
  }

  const totalImages = images.length;
  const currentImageUrl = images[currentIndex].url;

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-main-image-wrapper">
        <img
          src={currentImageUrl}
          alt={`Foto ${currentIndex + 1} da receita`}
          className="carousel-main-image"
        />
        {/* <button
          onClick={goToPrev}
          className="carousel-button prev"
          aria-label="Imagem Anterior"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="carousel-button next"
          aria-label="Próxima Imagem"
        >
          &gt;
        </button> */}

        <div className="title">
          <h1>{title}</h1>
          <p>{chefName}</p>
        </div>
      </div>
      <div className="carousel-bullets">
        {images.map((_, index) => (
          <div
            key={index}
            className={`bullet ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeHeader;
