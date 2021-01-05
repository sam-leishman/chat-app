import React, { Component } from 'react';

class Header extends Component {
    render() {
        const channelName = this.props.channelTabs.map(tab => {
            if (tab.active) {
                return tab.title;
            }
        })
        return (
            <div>
                <h2 className='channel-name'>{channelName}</h2>
            </div>
        )
    }
}

export default Header;