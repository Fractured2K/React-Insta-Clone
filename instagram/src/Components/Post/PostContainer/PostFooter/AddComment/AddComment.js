import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './AddComment.css';

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
            <form className="add-comment" onSubmit={this.addComment}>
                <input name="comment" placeholder="Add a comment..." value={this.state.comment} onChange={this.handleChanges} />
                <span className="sprite hotdog-menu"></span>
            </form>
        )
    }
}

AddComment.propTypes = {
    addComment: PropTypes.func
}

export default AddComment;
