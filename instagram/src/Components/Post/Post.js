import React from 'react';

// Styles
import './Post.css';

// Components
import PostContainer from './PostContainer/PostContainer';

const Post = props => {
    return (
        <div className="container">
            {console.log(props)}
            {props.posts.map((post, i) =>
                <PostContainer
                    post={post}
                    key={i}
                />
            )}
        </div>
    )
}

export default Post;
