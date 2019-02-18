import React from 'react';

// Components
import Comment from './Comment/Comment';

const CommentSection = props => {
    return (
        <div>
            {props.comments.map(comment => (
                <Comment comment={comment} />
            ))}
        </div>
    )
}

export default CommentSection;
