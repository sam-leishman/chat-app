import { Component } from 'react';
import { store } from '../components/main.js';
import Header from '../components/Header.js';
import Chat from '../components/Chat.js';
import ServerName from '../components/ServerName'
import Channels from '../components/Channels'

class HomePage extends Component {
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        const state = store.getState();
        const currentChannelId = state.currentChannelId;
        const channels = state.channels;
        const currentChannel = channels.find((c) => c.id === currentChannelId);

        const channelTabs = channels.map(c => (
            {
                title: c.title,
                active: c.id === currentChannelId,
                id: c.id,
            }
        ))
        const userInfo = this.props.user;
        return (
            <div className='container-fluid'>
                <div className="row no-gutters header">
                    <header className='server-name col-3 col-lg-2'>
                        <ServerName></ServerName>
                    </header>
                    <header className='channel-header col-9 col-lg-10'>
                        <Header channelTabs={channelTabs} />
                    </header>
                </div>
                <div className='main-page row no-gutters'>
                    <div className='channels col-3 col-lg-2'>
                        <Channels channelTabs={channelTabs} />
                    </div>
                    <div className='messages-box col-9 col-lg-10'>
                        <Chat
                            channel={currentChannel}
                            user={userInfo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default HomePage;