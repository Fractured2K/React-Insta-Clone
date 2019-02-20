import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            search: ''
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSearch = (e) => {
        this.props.search(e, this.state.search)
    }

    render() {
        return (
            <input type="text" onKeyDown={this.handleSearch} className="search-bar" name="search" onChange={this.handleChanges} placeholder="Search" value={this.state.search} />
        )
    }
}

export default SearchBar;
