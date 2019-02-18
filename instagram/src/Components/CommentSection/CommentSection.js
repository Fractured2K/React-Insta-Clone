import React from 'react';
import PropTypes from 'prop-types';

// Components
import Comment from './Comment/Comment';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map((comment, i) => (
                <Comment comment={comment} key={i} />
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.text
    }))
}

export default CommentSection;
