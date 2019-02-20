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
    user: localStorage.getItem('user')
  }

  componentDidMount = () => {
    this.setState({
      posts: data
    })
  }

  loginHandle = (e, credentials) => {
    e.preventDefault();

    const newUser = {
      username: credentials.username,
      password: credentials.password
    }

    this.setState({
      user: localStorage.setItem('user', JSON.stringify(newUser))
    })
  }

  render() {
    return (
      <div className="App">
        <Authentication login={this.loginHandle} posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
