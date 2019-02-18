import React from 'react';

import './PostHeader.css';

const PostHeader = props => {
    return (
        <div className="post-header">
            <img src={props.profileImage} alt="" />

            <span>{props.username}</span>
        </div>
    )
}

export default PostHeader;
