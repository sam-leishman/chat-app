import { Component } from 'react';
import { store } from '../components/main.js';
import Header from '../components/Header.js';
import Chat from '../components/Chat.js';
import ServerName from '../components/ServerName'
import Channels from '../components/Channels'

// Firebase =======================================================
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from "react-firebase-hooks/firestore";

// firebase.initializeApp({
//     apiKey: "AIzaSyBZis4GrO4npwU7Vl4-NbsFdjqsNXQNzrc",
//     authDomain: "spiffy-chat-app.firebaseapp.com",
//     projectId: "spiffy-chat-app",
//     storageBucket: "spiffy-chat-app.appspot.com",
//     messagingSenderId: "915849283049",
//     appId: "1:915849283049:web:ee555eac17266ba83ff778",
//     measurementId: "G-BCVXZEJNEY"
// })

// const auth = firebase.auth();
// const firestore = firebase.firestore();

// const [user] = useAuthState(auth);
// ================================================================

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
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default HomePage;