import React from 'react';
import './_banner.scss';

function Banner(props) {
  const backgroundOpacity = props.isAboutPage ? "banner__overlay__about-page" : "banner__overlay__home-page";

  const bannerText = window.innerWidth <= 425 && props.bannerText ? "Chez vous,\npartout et ailleurs" : props.bannerText;

  return (
    <div className="banner">
      <img src={props.imageUrl} className="banner__img" alt={props.altText} />
      <div className={`banner__overlay ${backgroundOpacity}`}>
        <h1 className="banner__overlay__text">{bannerText}</h1>
      </div>
    </div>
  )
};

export default Banner;