import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route {...rest} render={(props) => authenticated
        ? <Component {...props} {...rest} /> 
        : <Redirect to="/login" />}
        />
    )
}

export default PrivateRoute;