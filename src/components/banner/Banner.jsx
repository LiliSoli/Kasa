import React from 'react';

function Banner(props) {
  return (
    <div className="banner">
      <img src={props.imageUrl} className="banner__img" alt={props.altText} />
      <div className="banner__overlay">
        <h1 className="banner__overlay__text">{props.bannerText}</h1>
      </div>
    </div>
  )
};

export default Banner;