import React, { Component } from 'react';
import styled from 'styled-components';

import './reset.css';

// Dummy data
import data from '../../instagram/src/dummy-data';

// Higher-order components
import authenticate from './Components/authentication/authenticate';

// Components
import Login from './Components/Login/Login';
import ShowPosts from './Components/ShowPosts/ShowPosts';

const Authentication = authenticate(Login)(ShowPosts);

// Styled Components
const AppContainer = styled.div`
  background: #FAFAFA;
`;

class App extends Component {
  state = {
    posts: [],
    filteredPosts: [],
    user: localStorage.getItem('user')
  }

  componentDidMount = () => {
    this.setState({
      posts: data
    })
  }

  handleLogin = credentials => {
    const newUser = {
      username: credentials.username,
      password: credentials.password
    }

    this.setState({
      user: localStorage.setItem('user', JSON.stringify(newUser))
    })
  }

  handleLogout = (e) => {
    e.preventDefault();

    this.setState({
      user: localStorage.removeItem('user')
    })
  }

  handleSearch = search => {
    const posts = this.state.posts.filter(post => post.username.includes(search))

    this.setState({
      filteredPosts: posts
    })
  }

  render() {
    return (
      <AppContainer>
        <Authentication
          login={this.handleLogin}
          logout={this.handleLogout}
          posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts}
          search={this.handleSearch}
        />
      </AppContainer>
    );
  }
}

export default App;
