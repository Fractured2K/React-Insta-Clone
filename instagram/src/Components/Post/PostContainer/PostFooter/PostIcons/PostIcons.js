import React from 'react';
import PropTypes from 'prop-types';

import './PostIcons.css';

const PostIcons = (props) => {
    return (
        <div className="post-icons" >
            <div className="icon">
                <span onClick={props.likePost} className={`sprite ${props.liked ? 'icon-heart-liked' : 'icon-heart'}`}></span>
            </div>

            <div className="icon">
                <span className="sprite icon-comment"></span>
            </div>
        </div>
    )
}

PostIcons.propTypes = {
    liked: PropTypes.bool,
    likePost: PropTypes.func
}

export default PostIcons;
