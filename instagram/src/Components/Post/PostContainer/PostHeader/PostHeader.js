import React from 'react';
import PropTypes from 'prop-types';

import './PostHeader.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img src={props.profileImage} alt="" />

            <span>{props.username}</span>
        </div>
    )
}

PostHeader.propTypes = {
    profileImage: PropTypes.string
}

export default PostHeader;
