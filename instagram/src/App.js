import React, { Component } from 'react';
import './reset.css';
import './App.css';

// Dummy data
import data from '../../instagram/src/dummy-data';

// Higher-order components
import authenticate from './Components/authentication/authenticate';

// Components
import Login from './Components/Login/Login';
import ShowPosts from './Components/ShowPosts/ShowPosts';

const Authentication = authenticate(Login)(ShowPosts);

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

  handleLogin = (e, credentials) => {
    e.preventDefault();

    const newUser = {
      username: credentials.username,
      password: credentials.password
    }

    this.setState({
      user: localStorage.setItem('user', JSON.stringify(newUser))
    })
  }

  handleSearch = (e, search) => {
    const posts = this.state.posts.filter(post => post.username.includes(search))

    this.setState({
      filteredPosts: posts
    })
  }


  render() {
    return (
      <div className="App" >
        <Authentication login={this.handleLogin} posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} search={this.handleSearch} />
      </div>
    );
  }
}

export default App;
