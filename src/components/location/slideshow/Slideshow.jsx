import React, { useState } from 'react';
import arrowLeft from '../../../assets/images/arrow-left.png';
import arrowRight from '../../../assets/images/arrow-right.png';
import './_slideshow.scss';

function Slideshow({ pictures }) {
  const [position, setPosition] = useState(0);

  const arrowClick = (direction) => {
    if (direction === "left") {
      setPosition(position === 0 ? pictures.length - 1 : position - 1);
    } else {
      setPosition(position === pictures.length - 1 ? 0 : position + 1);
    }
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[position]}
        className="slideshow__img"
        alt={`{title}`}
      />
 
      <div className="slideshow__counter">
        {position + 1}/{pictures.length}
      </div>

      {pictures.length > 1 && 
        <>
          <div
            className="slideshow__arrow slideshow__arrow--left"
            onClick={() => arrowClick("left")}
          >
            <img src={arrowLeft} alt="Left arrow" />
          </div>

          <div
            className="slideshow__arrow slideshow__arrow--right"
            onClick={() => arrowClick("right")}
          >
            <img src={arrowRight} alt="Right arrow" />
          </div>
        </> 
      }
    </div>
  );
}

export default Slideshow;
