import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import PostLikes from './PostLikes/PostLikes';
import CommentSection from './CommentSection/CommentSection';

// Styled components
const PostFooterContainer = styled.div`
    margin-bottom: 5px;
    padding: 0 16px;
`;


const PostFooter = props => {
    return (
        <PostFooterContainer>
            <PostLikes likes={props.likes} />
            <CommentSection comments={props.comments} timestamp={props.timestamp} addComment={props.addComment} />
        </PostFooterContainer>
    )
}

PostFooter.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })),
    likes: PropTypes.number,
    timestamp: PropTypes.string
}

export default PostFooter;
