import React from 'react';

const authenticate = LoginComponent => ShowPostsComponent => props => {
    // If user is logged in return ShowPosts component
    if (localStorage.getItem('user')) {
        return <ShowPostsComponent posts={props.posts} search={props.search} />;
    }

    // If user is not logged in return login component
    return <LoginComponent login={props.login} />;
}

export default authenticate;
