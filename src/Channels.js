import React, { Component } from 'react';
import { store } from './App';

import ChannelInput from './ChannelInput'

class Channels extends Component {
    render() {
        const tabs = this.props.channelTabs.map((tab, i) => (
            <div
                key={i}
                className={tab.active ? 'currentTab' : 'tab'}
            >
                {tab.title}
            </div>
        ))
        return (
            <div>
                {tabs}
                <div className='channel-input'>
                    <ChannelInput />
                </div>
            </div>
        )
    }
}

export default Channels;