import React, { Component } from 'react';
import { signInWithGoogle } from '../helpers/auth'

class LoginPage extends Component {
    render() {
        return (
            <div className='login'>
                <h1 className='website-name'>Spiffy</h1>
                <h3 className='text-center'>Login</h3>
                <button className='sign-in' onClick={() => signInWithGoogle()}>Login with Google</button>
            </div>
        )
    }
}

export default LoginPage;