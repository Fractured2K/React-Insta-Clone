import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Post.css';

// Components
import PostContainer from './PostContainer/PostContainer';

const Post = props => {
    return (
        <div className="container">
            {props.posts.map((post, i) =>
                <PostContainer
                    post={post}
                    key={i}
                />
            )}
        </div>
    )
}

Post.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })),
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string
    }))
}

export default Post;
