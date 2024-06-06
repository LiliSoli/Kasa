import React from 'react';
import activeStar from '../../../assets/images/star-active.png';
import inactiveStar from '../../../assets/images/star-inactive.png';

function Rating(props) {
    const rating = props.rating;
    const displayStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i}>
                    {i < rating ? <img src={activeStar} alt="étoile pleine" /> : <img src={inactiveStar} alt="étoile vide" /> }
                </span>
            )
        }
        return stars;
    };

    return <div className="rating">{displayStars(rating)}</div>;
};

export default Rating;