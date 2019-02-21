import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostIcons from '../PostIcons/PostIcons';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Styled Components
const PostLikesNumber = styled.span`
    font-size: 14px;
    font-weight: 600;
`;


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
                <PostLikesNumber>{numberWithCommas(this.state.likes)} likes</PostLikesNumber>
            </div>
        )
    }
}

PostLikes.propTypes = {
    likes: PropTypes.number
}

export default PostLikes;
