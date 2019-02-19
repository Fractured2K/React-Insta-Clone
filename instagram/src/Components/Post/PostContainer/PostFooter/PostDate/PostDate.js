import React from 'react';
import Moment from 'react-moment';

import './PostDate.css';

const PostDate = props => <span className="post-timestamp"><Moment fromNow parse="MMMM Do YYYY, hh:mm:ss a">{props.timestamp}</Moment></span>

export default PostDate;
