import React from 'react';
import './_host.scss';

function Host(props) {

    const hostFirstName = props.hostName.split(" ")[0];
    const hostLastName = props.hostName.split(" ")[1];

    return (
        <div className="host">
            <div className="host__name">
                <span>{hostFirstName}</span>
                <span>{hostLastName}</span>
            </div>
            <img src={props.hostPicture} alt="avatar de l'hôte" />
        </div>
    )
};

export default Host;