import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostIcons from '../PostIcons/PostIcons';

import './PostLikes.css';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class PostLikes extends Component {
    constructor(props) {
        super();

        this.state = {
            likes: props.likes,
            liked: false
        }
    }

    likePost = (e) => {
        e.preventDefault();

        if (this.state.liked) {
            return this.setState({
                likes: this.state.likes - 1,
                liked: !this.state.liked
            })
        }

        this.setState({
            likes: this.state.likes + 1,
            liked: !this.state.liked
        })
    }

    render() {
        return (
            <div>
                <PostIcons liked={this.state.liked} likePost={this.likePost} />
                <span>{numberWithCommas(this.state.likes)} likes</span>
            </div>
        )
    }
}

PostLikes.propTypes = {
    likes: PropTypes.number
}

export default PostLikes;
