import './App.css';
import { Component } from 'react';
import { createStore } from 'redux';
import Header from './Header.js';
import Chat from './Chat.js';
import ChatInput from './ChatInput.js'
import ServerName from './ServerName'
import Channels from './Channels'
import ChannelInput from './ChannelInput'

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message)
    }
  } else if (action.type === 'DELETE_MESSAGE') {
    return {
      messages: [
        ...state.messages.slice(0, action.index),
        ...state.messages.slice(action.index + 1, state.messages.length),
      ],
    }
  } else {
    return state;
  }
}

const initialState = { messages: [] };

export const store = createStore(reducer, initialState);


class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const messages = store.getState().messages;
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
            Channels
            <Channels />
          </div>
          <div className='messages-box col-9'>
            <Chat messages={messages}/>
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
