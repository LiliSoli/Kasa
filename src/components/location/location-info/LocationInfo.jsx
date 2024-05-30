import React from 'react';

function LocationInfo(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.location}</p>
        </div>
  )
};

export default LocationInfo;