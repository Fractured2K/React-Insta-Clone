import React from 'react';

import './PostImage.css';

const PostImage = props => {
    return (
        <div className="post-content">
            <img className="post-content-img" src={props.image} alt="" />
        </div>
    )
}

export default PostImage;
