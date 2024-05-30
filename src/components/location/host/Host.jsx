import React from 'react';

function Host(props) {
    return (
            <div>
                <span>{props.hostName}</span>
                <img src={props.hostPicture} alt="avatar de l'hôte" />
            </div>
  )
};

export default Host;