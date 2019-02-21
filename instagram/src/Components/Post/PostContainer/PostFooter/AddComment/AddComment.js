import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const AddCommentContainer = styled.form`
    display: flex;
    align-items: center;
    border-top: 1px solid #efefef;
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
    width: 100%;

    input {
        border: none;
        margin: 15px 0;
        outline: none;
        width: 100%;

        &::placeholder {
            color: #ACACAC;
            font-size: 14px;
        }
    }
`;

class AddComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comment: ""
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addComment = e => {
        const username = JSON.parse(localStorage.getItem('user'))

        const newComment = {
            username: username.username,
            comment: this.state.comment
        }

        this.props.addComment(e, newComment)

        this.setState({ comment: "" })
    }

    render() {
        return (
            <AddCommentContainer onSubmit={this.addComment}>
                <input name="comment" placeholder="Add a comment..." value={this.state.comment} onChange={this.handleChanges} />
                <span className="sprite hotdog-menu"></span>
            </AddCommentContainer>
        )
    }
}

AddComment.propTypes = {
    addComment: PropTypes.func
}

export default AddComment;
