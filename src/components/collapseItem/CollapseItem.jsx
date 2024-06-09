import React, { useState, useRef, useEffect } from 'react';
import collapseIcon from '../../assets/images/collapse-icon.png';
import './_collapse-item.scss';

function CollapseItem(props) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const activeCollapse = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.maxHeight = '0px';
        }
    }, [isOpen]);
    
    return (
        <div className="collapse-item">
            <div className="collapse-item__heading">
                <span>{props.title}</span>
                <img
                    src={collapseIcon} alt="Flèche bas"
                    className={`collapse-icon ${isOpen ? "open" : "close"}`}
                    onClick={activeCollapse}
                />
            </div>

            <div ref={contentRef} className={`collapse-item__content ${isOpen ? "open" : "close"}`}>
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
        </div>
  )
};

export default CollapseItem;