import React from 'react';

const Comment = props => {
    return (
        <div>
            <h2>{props.comment.username} <span>{props.comment.text}</span></h2>
        </div>
    )
}

export default Comment;
