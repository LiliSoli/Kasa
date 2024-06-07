import React from 'react';
import './_locationCard.scss';

function LocationCard(props) {
  return (
    <div className="card">
        <img src={props.cover} className="card__img" alt={props.title} />
          <h2 className="card__text" >{props.title}</h2>
    </div>
  )
};

export default LocationCard;