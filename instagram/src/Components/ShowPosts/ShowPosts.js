import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Post from '../Post/Post';

const ShowPosts = props => {
    return (
        <div>
            <SearchBar />
            <Post />
        </div>
    )
}

export default ShowPosts;
