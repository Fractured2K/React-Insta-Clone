import React from 'react';

// Styles
import './PostFooter.css';

// Components
import PostIcons from './PostIcons/PostIcons';
import PostLikes from './PostLikes/PostLikes';
import CommentSection from './CommentSection/CommentSection';

const PostFooter = props => {
    return (
        <div className="post-footer">
            <PostIcons />
            <PostLikes likes={props.likes} />
            <CommentSection comments={props.comments} timestamp={props.timestamp} addComment={props.addComment} />
        </div>
    )
}

export default PostFooter;
