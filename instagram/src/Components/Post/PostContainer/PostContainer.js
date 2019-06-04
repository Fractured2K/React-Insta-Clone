import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';
import PostFooter from './PostFooter/PostFooter';

// Styled Components
const SinglePostContainer = styled.div`
    max-width: 614px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #e6e6e6;
    margin-top: 60px;
    background: #FFFFFF;
`;

const PostContainer = props => {
    return (
        <SinglePostContainer>
            <PostHeader profileImage={props.post.thumbnailUrl} username={props.post.username} />
            <PostImage image={props.post.imageUrl} />
            <PostFooter likes={props.post.likes} comments={props.post.comments} timestamp={props.post.timestamp} />
        </SinglePostContainer>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
}

export default PostContainer;
