import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)

        console.log(props)
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
            <div>
                <form onSubmit={this.handleLogin}>
                    <input type="text" name="username" onChange={this.handleChanges} placeholder="Username" value={this.state.username} />
                    <input type="text" name="password" onChange={this.handleChanges} placeholder="Password" value={this.state.password} />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login;
