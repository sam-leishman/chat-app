import './App.css';
import { Component } from 'react';
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { fullDate } from './date.js'

// Component imports
import Header from './Header.js';
import Chat from './Chat.js';
import ChatInput from './ChatInput.js'
import ServerName from './ServerName'
import Channels from './Channels'
import ChannelInput from './ChannelInput'

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    const messageToAdd = {
      text: action.text,
      timestamp: fullDate,
      id: uuidv4(),
    }
    return {
      messages: state.messages.concat(messageToAdd)
    }
  } else if (action.type === 'DELETE_MESSAGE') {
    return {
      messages: state.messages.filter((message) => (
        message.id !== action.id
      ))
    }
  } else {
    return state;
  }
}

const initialState = {
  currentChannelId: '1-fca2', // New state property
  channels: [ // Two threads in state
    {
      id: '1-fca2', // hardcoded pseudo-UUID
      title: 'Buzz Aldrin',
      messages: [
        { // This thread starts with a single message already
          text: 'Test',
          timestamp: fullDate,
          id: uuidv4(),
        },
      ],
    },
    {
      id: '2-be91',
      title: 'Michael Collins',
      messages: [],
    },
  ],
};

export const store = createStore(reducer, initialState);


class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const state = store.getState();
    const currentChannelId = state.currentChannelId;
    const channels = state.channels;
    const currentChannel = channels.find((t) => t.id === currentChannelId);
    return (
      <div className='container-fluid'>
        <div className="row no-gutters header">
          <header className='server-name col-3'>
            <ServerName></ServerName>
          </header>
          <header className='channel-header col-9'>
            Channel-header
            <Header></Header>
          </header>
        </div>
        <div className='main-page row no-gutters'>
          <div className='channels col-3'>
            <h5>Channels</h5>
            <Channels />
          </div>
          <div className='messages-box col-9'>
            <Chat
              channel={currentChannel}
            />
          </div>
          <div className='channel-input col-3'>
            <ChannelInput />
          </div>
          <div className='message-input col-9'>
            <ChatInput />
          </div>
        </div>
      </div>
    )
  };
}

export default App;
