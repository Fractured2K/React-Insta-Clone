import React from 'react';

// Components
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            <CommentSection comments={props.post.comments} />
        </div>
    )
}

export default PostContainer;
