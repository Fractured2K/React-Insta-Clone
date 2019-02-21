import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import PostContainer from './PostContainer/PostContainer';

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
`;

const Post = props => {
    return (
        <Container>
            {props.posts.map((post, i) =>
                <PostContainer
                    post={post}
                    key={i}
                />
            )}
        </Container>
    )
}

Post.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })),
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string
    }))
}

export default Post;
