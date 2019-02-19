import React from 'react';

import './PostLikes.css';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const PostLikes = props => <span className="post-likes">{numberWithCommas(props.likes)} likes</span>

export default PostLikes;
