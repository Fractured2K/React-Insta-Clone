import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const Header = styled.header`
    display: flex;
    justify-content: center;
    background: #fff;
    padding: 10px 0;
    border: solid 1px #dbdbdb;

     nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 60%;
     }
`;

const IconContainer = styled.div`
    display: flex;
    align - items: center;
    padding: 10px;
`;

const NavIcon = styled.div`
    margin: 0 10px;
`;

const SearchBarInput = styled.input`
    background: #fafafa;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    padding: 6px 10px 6px 10px;

    &::placeholder {
        font-size: 12px;
    }
`;


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

    handleSearch = () => {
        this.props.search(this.state.search)
    }

    render() {
        return (
            <Header>
                <nav>
                    <IconContainer>
                        <span className="sprite icon-instagram-logo"></span>
                        <NavIcon className="pipe"></NavIcon>
                        <span className="sprite icon-instagram-text"></span>
                    </IconContainer>

                    <div>
                        <SearchBarInput type="text" onKeyDown={this.handleSearch} name="search" onChange={this.handleChanges} placeholder="Search" value={this.state.search} />
                    </div>

                    <IconContainer>
                        <NavIcon>
                            <span className="sprite icon-explore"></span>
                        </NavIcon>

                        <NavIcon>
                            <span className="sprite icon-heart"></span>
                        </NavIcon>
                        <NavIcon>
                            <span onClick={this.props.logout} className="sprite icon-person"></span>
                        </NavIcon>
                    </IconContainer>
                </nav>
            </Header>
        )
    }
}

SearchBar.propTypes = {
    search: PropTypes.func,
    logout: PropTypes.func
}

export default SearchBar;
