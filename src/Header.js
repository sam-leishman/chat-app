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
                <h3 className='channel-name'>{channelName}</h3>
            </div>
        )
    }
}

export default Header;