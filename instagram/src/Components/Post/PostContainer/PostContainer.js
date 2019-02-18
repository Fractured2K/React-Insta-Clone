import React from 'react';
import PropTypes from 'prop-types';

// Components
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';
import PostFooter from './PostFooter/PostFooter';

// Styles
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-container">
            <PostHeader profileImage={props.post.thumbnailUrl} username={props.post.username} />
            <PostImage image={props.post.imageUrl} />
            <PostFooter likes={props.post.likes} comments={props.post.comments} timestamp={props.post.timestamp} />
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
}

export default PostContainer;
