import React, { Component } from 'react';

import PostIcons from './PostIcons/PostIcons';

import './PostLikes.css';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class PostLikes extends Component {
    constructor(props) {
        super();

        this.state = {
            likes: props.likes
        }
    }

    likePost = (e) => {
        e.preventDefault();

        this.setState({
            likes: this.state.likes + 1,
        })
    }

    render() {
        return (
            <div>
                <PostIcons />
                <span>{numberWithCommas(this.state.likes)} likes</span>
            </div>
        )
    }
}

export default PostLikes;
