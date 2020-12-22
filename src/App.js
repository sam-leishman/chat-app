import './App.css';
import { Component } from 'react';
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { fullDate } from './date.js'
// Component imports
import Header from './Header.js';
import Chat from './Chat.js';
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
    const channelIndex = state.channels.findIndex(c => c.id === action.channelId)
    const lastChannel = state.channels[channelIndex]
    const newChannel = {
      ...lastChannel,
      messages: lastChannel.messages.concat(messageToAdd)
    }
    return {
      ...state,
      channels: [
        ...state.channels.slice(0, channelIndex),
        newChannel,
        ...state.channels.slice(channelIndex + 1, state.channels.length)
      ]
    }
  } else if (action.type === 'DELETE_MESSAGE') {
    const channelIndex = state.channels.findIndex(
      c => c.messages.find(message => (
        message.id === action.id
      ))
    )
    const lastChannel = state.channels[channelIndex]
    const newChannel = {
      ...lastChannel,
      messages: lastChannel.messages.filter(message => (
        message.id !== action.id
      ))
    }
    return {
      ...state,
      channels: [
        ...state.channels.slice(0, channelIndex),
        newChannel,
        ...state.channels.slice(channelIndex + 1, state.channels.length)
      ]
    }
  } else {
    return state;
  }
}

const initialState = {
  currentChannelId: '1-fca2',
  channels: [
    {
      id: '1-fca2',
      title: 'Test Channel 1',
      messages: [
        {
          text: 'Test',
          timestamp: fullDate,
          id: uuidv4(),
        },
      ],
    },
    {
      id: '2-be91',
      title: 'Test Channel 2',
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
    const currentChannel = channels.find((c) => c.id === currentChannelId);

    const channelTabs = channels.map(c => (
      {
        title: c.title,
        active: c.id === currentChannelId,
      }
    ))

    return (
      <div className='container-fluid'>
        <div className="row no-gutters header">
          <header className='server-name col-3'>
            <ServerName></ServerName>
          </header>
          <header className='channel-header col-9'>
            <Header channelTabs={channelTabs} />
          </header>
        </div>
        <div className='main-page row no-gutters'>
          <div className='channels col-3'>
            <h5>Channels</h5>
            <Channels channelTabs={channelTabs} />
          </div>
          <div className='messages-box col-9'>
            <Chat
              channel={currentChannel}
            />
          </div>
          <div className='channel-input col-3'>
            <ChannelInput />
          </div>
        </div>
      </div>
    )
  };
}

export default App;