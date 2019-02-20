import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Post from '../Post/Post';

const ShowPosts = props => {
    return (
        <div>
            <SearchBar posts={props.posts} />
            <Post posts={props.posts} />
        </div>
    )
}

export default ShowPosts;
