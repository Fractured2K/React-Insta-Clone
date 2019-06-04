import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../SearchBar/SearchBar';
import Post from '../Post/Post';

const ShowPosts = props => {
    return (
        <div>
            <SearchBar
                search={props.search}
                logout={props.logout}
            />

            <Post
                posts={props.posts}
            />
        </div>
    )
}

ShowPosts.propTypes = {
    logout: PropTypes.func,
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
    })),
    search: PropTypes.func,
}

export default ShowPosts;
