import React from 'react';

function Banner(props) {
  return (
    <div className="banner">
        <img src={props.imageUrl} className="banner__img" alt={props.altText} />
        <h1 className="banner__text">{props.bannerText}</h1>
    </div>
  )
};

export default Banner;