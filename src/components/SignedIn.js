import React from 'react';
import { Link, Route, Switch } from "react-router-dom";

const SignedIn = () => {
    return (
        <div className="signed-in">
            <h3>Where would you like to go?</h3>
            <Link to="/" className="link-buttons">
                Chat
            </Link>
            <Link to="/profile" className="link-buttons">
                Profile
            </Link>
        </div>
    )
}

export default SignedIn;