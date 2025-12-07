import React, { useState } from "react";
import "./Header.css";
import mainImage from "../../assets/main_image.png";

function Header({ images = [], title, chefName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const safeImages = images || [];
  const currentImageUrl = safeImages[currentIndex]?.url;
  const imgSrc = currentImageUrl || mainImage;

  return (
    <div className="carousel-container">
      <div className="carousel-main-image-wrapper">
        <img
          src={imgSrc}
          alt={`Foto ${currentIndex + 1} da receita`}
          className="carousel-main-image"
        />
        <div className="title">
          <h1>{title}</h1>
          <p>{chefName}</p>
        </div>
      </div>
      {safeImages.length > 1 && (
        <div className="carousel-bullets">
          {safeImages.map((_, index) => (
            <div
              key={index}
              className={`bullet ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
