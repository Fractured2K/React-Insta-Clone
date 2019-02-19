import React, { Component } from 'react'

import './AddComment.css';

class AddComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: ""
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addComment = e => {
        this.setState({ comment: "" })
        this.props.addComment(e, this.state.comment)
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

export default AddComment;
