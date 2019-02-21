import React from 'react';
import PropTypes from 'prop-types';

import './PostImage.css';

const PostImage = props => {
    return (
        <div className="post-content">
            <img className="post-content-img" src={props.image} alt="" />
        </div>
    )
}

PostImage.propTypes = {
    image: PropTypes.string
}

export default PostImage;
