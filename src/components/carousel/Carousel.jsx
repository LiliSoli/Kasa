import React, { useState } from 'react';

function Carousel({ pictures }) {
  const [position, setPosition] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setPosition(position === 0 ? pictures.length - 1 : position - 1);
    } else {
      setPosition(position === pictures.length - 1 ? 0 : position + 1);
    }
  };

  return (
    <div className="carousel">
      <img
        src={pictures[position]}
        className="carousel__img"
        alt={`{title}`} // Texte alternatif pour l'accessibilité
      />
 
      <div className="carousel__counter">
        {position + 1}/{pictures.length}
      </div>

      <div
        className="carousel__arrow carousel__arrow--left"
        onClick={() => handleArrowClick("left")}
      >
        {'<'}
      </div>

      <div
        className="carousel__arrow carousel__arrow--right"
        onClick={() => handleArrowClick("right")}
      >
        {'>'}
      </div>
    </div>
  );
}

export default Carousel;
