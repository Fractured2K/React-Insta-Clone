import React from 'react';

import './PostFooter.css';

import PostLikes from './PostLikes/PostLikes';
import CommentSection from './CommentSection/CommentSection';
import PostDate from './PostDate/PostDate';

const PostFooter = props => {
    return (
        <div className="post-footer">
            <PostLikes likes={props.likes} />
            <CommentSection comments={props.comments} />
            <PostDate timestamp={props.timestamp} />
        </div>
    )
}

export default PostFooter;
