import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { signInWithGoogle } from '../helpers/auth'

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        error: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // Login
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <div>
                        <input
                            placeholder="Email"
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        <input
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </div>
                    <button type="submit">Login</button>
                    <button onClick={() => signInWithGoogle()}>Login with Google</button>
                    <div>
                        { this.state.error ? (
                            <p>{this.state.error}</p>
                        ) : null }
                        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage;