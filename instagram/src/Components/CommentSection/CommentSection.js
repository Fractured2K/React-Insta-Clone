import React from 'react';

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

export default CommentSection;
