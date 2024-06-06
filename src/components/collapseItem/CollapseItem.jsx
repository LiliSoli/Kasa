import React, { useState } from 'react';
import collapseIcon from '../../assets/images/collapse-icon.png';

function CollapseItem(props) {
    const [isOpen, setIsOpen] = useState(false);

    const activeCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-item">
            <div className="collapse-item__heading">
                <span>{props.title}</span>
                <img
                    src={collapseIcon} alt="Flèche bas"
                    className={`collapse-icon ${isOpen ? "open" : ""}`}
                    onClick={activeCollapse}
                />
            </div>

            {isOpen && (
                <div className="collapse-item__content">
                    {props.description &&
                        <div>{props.description}</div>
                    }
    
                    {props.equipments &&
                        <>
                            {props.equipments.map((equipment, index) => (
                            <span key={index}>
                                {equipment}
                            </span>
                            ))}
                        </>
                    }
                </div>
            )}
        </div>
  )
};

export default CollapseItem;