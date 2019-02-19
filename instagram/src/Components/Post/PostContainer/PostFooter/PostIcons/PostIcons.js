import React from 'react';

import './PostIcons.css';

const PostIcons = (props) => {
    return (
        <div className="post-icons" >
            <div className="icon">
                <span onClick={props.likePost} className={`sprite ${props.liked ? 'icon-heart-liked' : 'icon-heart'}`}></span>
            </div>

            {console.log(props.liked)}
            <div className="icon">
                <span className="sprite icon-comment"></span>
            </div>
        </div>
    )
}

export default PostIcons;
