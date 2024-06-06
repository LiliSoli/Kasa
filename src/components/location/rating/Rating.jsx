import React from 'react';
import { FaStar } from "react-icons/fa";

function Rating(props) {
    const rating = props.rating;
    const displayStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i}>
                    {i < rating ? <FaStar className="active-star"/> : <FaStar className="inactive-star"/> }
                </span>
            )
        }
        return stars;
    };

    return <div className="rating">{displayStars(rating)}</div>;
};

export default Rating;