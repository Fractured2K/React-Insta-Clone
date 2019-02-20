import React, { Component } from 'react';
import './reset.css';
import './App.css';


import authenticate from './Components/authentication/authenticate';
import Login from './Components/Login/Login';
import ShowPosts from './Components/ShowPosts/ShowPosts';

const Authentication = authenticate(Login)(ShowPosts);

class App extends Component {
  state = {
    user: localStorage.getItem('user')
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
        <Authentication login={this.loginHandle} />
      </div>
    );
  }
}

export default App;
