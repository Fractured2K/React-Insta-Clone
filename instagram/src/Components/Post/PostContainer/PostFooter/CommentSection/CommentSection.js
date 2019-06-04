import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Comment from './Comment/Comment';
import PostDate from '../PostDate/PostDate';
import AddComment from '../AddComment/AddComment';

// Styled Components
const CommentSectionContainer = styled.div`
    margin: 5px 0;
`;

class CommentSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: props.comments
        }
    }

    addComment = (e, comment) => {
        e.preventDefault();

        const newComment = {
            text: comment.comment,
            username: comment.username
        }

        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }

    render() {
        return (
            <CommentSectionContainer>
                {
                    this.state.comments.map((comment, i) => (
                        <Comment comment={comment} key={i} />
                    ))
                }

                <PostDate timestamp={this.props.timestamp} />
                <AddComment addComment={this.addComment} />
            </CommentSectionContainer>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.text
    }))
}

export default CommentSection;
