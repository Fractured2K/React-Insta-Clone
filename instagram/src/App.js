import React, { Component } from 'react';
import './App.css';

// import SearchBar from './Components/SearchBar/SearchBar';
import Post from './Components/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
