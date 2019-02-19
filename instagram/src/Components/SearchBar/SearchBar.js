import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <input className="search-bar" type="text" placeholder="Search" />
        )
    }
}

export default SearchBar;
