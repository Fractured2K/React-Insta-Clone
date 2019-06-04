import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContent = styled.div`
    max-width: 614px;

    img {
         width: 100%;
         object-fit: cover;
    }
`;

const PostImage = props => {
    return (
        <PostContent className="post-content">
            <img src={props.image} alt="" />
        </PostContent>
    )
}

PostImage.propTypes = {
    image: PropTypes.string
}

export default PostImage;
