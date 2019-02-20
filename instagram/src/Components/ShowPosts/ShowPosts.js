import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import Post from '../Post/Post';

const ShowPosts = props => {
    return (
        <div>
            <SearchBar search={props.search} />
            <Post posts={props.posts} />
        </div>
    )
}

export default ShowPosts;
