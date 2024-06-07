import React from 'react';
import './_tags.scss';

function Tags(props) {
    return (
        <div className='tags'>
            {props.tags.map((tagItem, index) => (
                <span key={index}>
                    {tagItem}
                </span>
            ))}
        </div>
  )
};

export default Tags;