import React from 'react';

function Tags(props) {
    return (
        <div>
            {props.tags.map((tagItem, index) => (
                <span key={index}>
                    {tagItem}
                </span>
            ))}
        </div>
  )
};

export default Tags;