import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const Comment = props => {
    return (
        <div className="comment">
            <h2>{props.comment.username} <span>{props.comment.text}</span></h2>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;
