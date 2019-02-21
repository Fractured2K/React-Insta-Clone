import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props)

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
            <header>
                <nav>
                    <div className="icon-container">
                        <span className="sprite icon-instagram-logo"></span>
                        <div className="pipe nav-icon"></div>
                        <span className="sprite icon-instagram-text"></span>
                    </div>

                    <div>
                        <input type="text" onKeyDown={this.handleSearch} className="search-bar" name="search" onChange={this.handleChanges} placeholder="Search" value={this.state.search} />
                    </div>

                    <div className="icon-container">
                        <div className="nav-icon">
                            <span className="sprite icon-explore"></span>
                        </div>

                        <div className="nav-icon">
                            <span className="sprite icon-heart"></span>
                        </div>
                        <div className="nav-icon">
                            <span onClick={this.props.logout} className="sprite icon-person"></span>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

SearchBar.propTypes = {
    search: PropTypes.func,
    logout: PropTypes.func
}

export default SearchBar;
