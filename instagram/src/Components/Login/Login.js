import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;

const LoginForm = styled.form`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    width: 350px;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    padding: 40px 0;

    img {
        margin: 0px 0 33px;
    }

    input {
        font-family: 'Segoe UI';
        font-size: 12px;
        width: 258px;
        margin: 3px 0;
        padding: 10px 7px;
        background: #fafafa;
        border-radius: 5px;
        border: 1px solid #e6e6e6;

        &::placeholder {
            color: #ACACAC;
            font-size: 12px;
        }
    }

    button {
        font-family: 'Segoe UI';
        font-weight: 600;
        font-size: 14px;
        margin: 10px 0;
        width: 258px;
        border-radius: 5px;
        color: #fff;
        background-color: #3897f0;
        border: 1px solid #3897f0;
        padding: 6px 0;
    }
`;

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = e => {
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.login(e, credentials)

        this.setState({ item: "" })
    }

    render() {
        return (
            <LoginContainer className="form-container">
                <LoginForm onSubmit={this.handleLogin}>
                    <img className="sprite-big instagram-logo" src="../../instagram-sprite.png" alt="" />
                    <input type="text" name="username" onChange={this.handleChanges} placeholder="Username" value={this.state.username} />
                    <input type="password" name="password" onChange={this.handleChanges} placeholder="Password" value={this.state.password} />
                    <button>Log in</button>
                </LoginForm>
            </LoginContainer>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func
}

export default Login;
