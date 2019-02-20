import React from 'react';

const authenticate = LoginComponent => AppComponent => props => {
    // If user is logged in return ShowPosts component
    if (localStorage.getItem('user')) {
        return <AppComponent posts={props.posts} />;
    }

    // If user is not logged in return login component
    return <LoginComponent login={props.login} />;
}

export default authenticate;
