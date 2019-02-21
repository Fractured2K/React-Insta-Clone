import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostHead = styled.div`
    display: flex;
    line-height: 30px;
    padding: 16px;

    img {
        border-radius: 50%;
        width: 30px;
        height: 30px;
    }

    span {
        font-size: 14px;
        font-weight: 600;
        margin: 0 8px;
    }
`;

const PostHeader = props => {
    return (
        <PostHead>
            <img src={props.profileImage} alt="" />

            <span>{props.username}</span>
        </PostHead>
    )
}

PostHeader.propTypes = {
    profileImage: PropTypes.string
}

export default PostHeader;
