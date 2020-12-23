import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { store } from "./main.js";

import ChannelInput from './ChannelInput'

class Channels extends Component {
    handleClick = (id) => {
        store.dispatch({
            type: 'OPEN_CHANNEL',
            id: id,
        })
    }

    handleDelete = (id) => {
        store.dispatch({
            type: 'DELETE_CHANNEL',
            id: id,
        })
    }


    render() {
        const tabs = this.props.channelTabs.map((tab, i) => (
            <div
                key={i}
                className={tab.active ? 'currentTab' : 'tab'}
                onClick={() => this.handleClick(tab.id)}
            >
                {tab.title}
                <button className='btn' onClick={() => this.handleDelete(tab.id)}><i className="fas fa-times"></i></button>

            </div>
        ))
        return (
            <div className='component-with-input'>
                <div>
                    <h5>Channels</h5>
                    {tabs}
                </div>
                <div className='channel-input'>
                    <ChannelInput />
                </div>
            </div>
        )
    }
}

export default Channels;