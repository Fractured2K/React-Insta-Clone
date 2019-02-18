import React from 'react';
import PropTypes from 'prop-types';

// Components
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            <CommentSection comments={props.post.comments} />
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
