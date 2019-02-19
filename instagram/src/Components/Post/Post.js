import React, { Component } from 'react';

// Dummy data
import data from '../../dummy-data.js';

// Styles
import './Post.css';

// Components
import PostContainer from './PostContainer/PostContainer';

class Post extends Component {
    constructor() {
        super();

        this.state = {
            post: data
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.post.map((post, i) => (
                    <PostContainer post={post} key={i} />
                ))}
            </div>
        )
    }
}

export default Post;
