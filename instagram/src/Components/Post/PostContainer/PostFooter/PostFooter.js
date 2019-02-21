import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './PostFooter.css';

// Components
import PostLikes from './PostLikes/PostLikes';
import CommentSection from './CommentSection/CommentSection';

const PostFooter = props => {
    return (
        <div className="post-footer">
            <PostLikes likes={props.likes} />
            <CommentSection comments={props.comments} timestamp={props.timestamp} addComment={props.addComment} />
        </div>
    )
}

PostFooter.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })),
    likes: PropTypes.number,
    timestamp: PropTypes.string
}

export default PostFooter;
