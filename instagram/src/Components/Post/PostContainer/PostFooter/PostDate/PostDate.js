import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostTimestamp = styled.span`
    font-size: 10px;
    letter-spacing: .2px;
    color: #999;
    text-transform: uppercase;
`;

const PostDate = props => <PostTimestamp className="post-timestamp"><Moment fromNow parse="MMMM Do YYYY, hh:mm:ss a">{props.timestamp}</Moment></PostTimestamp>


PostDate.propTypes = {
    timestamp: PropTypes.string
}

export default PostDate;
