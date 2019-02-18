import React, { Component } from 'react';

import data from '../../dummy-data.js';

import PostContainer from '../PostContainer/PostContainer';

class Post extends Component {
    constructor() {
        super();

        this.state = {
            post: data
        }
    }

    render() {
        return (
            <div>
                {this.state.post.map(post => (
                    <PostContainer post={post} />
                ))}
            </div>
        )
    }
}

export default Post;
