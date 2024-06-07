import React from 'react';
import './_banner.scss';

function Banner(props) {
  const backgroundOpacity = props.isAboutPage ? "banner__overlay__about-page" : "banner__overlay__home-page";

  return (
    <div className="banner">
      <img src={props.imageUrl} className="banner__img" alt={props.altText} />
      <div className={`banner__overlay ${backgroundOpacity}`}>
        <h1 className="banner__overlay__text">{props.bannerText}</h1>
      </div>
    </div>
  )
};

export default Banner;