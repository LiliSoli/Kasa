import React from 'react';
import './_locationInfo.scss';

function LocationInfo(props) {
    return (
        <div className="location-info">
            <h1>{props.title}</h1>
            <p>{props.location}</p>
        </div>
    )
};

export default LocationInfo;