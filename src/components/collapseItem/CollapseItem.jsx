import React, { useState } from 'react';
import collapseIcon from '../../assets/images/collapse-icon.png';
import './_collapse-item.scss';

function CollapseItem(props) {
    const [isOpen, setIsOpen] = useState(false);

    const activeCollapse = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="collapse-item">
            <div className="collapse-item__heading">
                <div className="collapse-item__heading__title">
                    <span>{props.title}</span>
                </div>
                <div className="collapse-item__heading__icon-content" onClick={activeCollapse}>
                    <img
                        src={collapseIcon} alt="Flèche bas"
                        className={`collapse-icon ${isOpen ? "open" : "close"}`}
                    />
                </div>
            </div>

            <div className={`collapse-item__content ${isOpen ? "open" : "close"}`}>
                {props.description &&
                    <div className={`collapse-item__content__text ${isOpen ? "open" : "close"}`}>
                        {props.description}
                    </div>
                }

                {props.equipments &&
                    <div className={`collapse-item__content__text ${isOpen ? "open" : "close"}`}>
                        {props.equipments.map((equipment, index) => (
                            <span key={index}>
                                {equipment}
                            </span>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
};

export default CollapseItem;