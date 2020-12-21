import React from 'react'
import PropTypes from 'prop-types'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

class Router extends React.Component {
    static childContextTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
    };
    constructor(props) {
        super(props)

        this.history = createBrowserHistory()
        this.history.listen(() => this.forceUpdate())
    }
    getChildContext() {
        return {
            history: this.history,
            location: window.location,
        }
    }
    render() {
        return this.props.children
    }
}

export default Router