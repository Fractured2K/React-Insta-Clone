import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const CommentContainer = styled.div`
    h2 {
        font-weight: 600;
        line-height: 18px;
        font-size: 14px;
        margin-top: 5px;

        span {
            font-weight: 400;
        }
    }
`;

const Comment = props => {
    return (
        <CommentContainer>
            <h2>{props.comment.username} <span>{props.comment.text}</span></h2>
        </CommentContainer>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;
