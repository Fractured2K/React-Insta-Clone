import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

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
            <div className="form-container">
                <form className="login-form" onSubmit={this.handleLogin}>
                    <img className="sprite-big instagram-logo" src="../../instagram-sprite.png" alt="" />
                    <input type="text" name="username" onChange={this.handleChanges} placeholder="Username" value={this.state.username} />
                    <input type="password" name="password" onChange={this.handleChanges} placeholder="Password" value={this.state.password} />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func
}

export default Login;
