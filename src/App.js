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
          <div className='channels col-3'>Channels</div>
          {/* <Channels /> */}
          <div className='chat-area col-9'>
            <div className='messages-box'>
              <Chat messages={messages}/>
            </div>
            <div className='message-input'>
              <ChatInput />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
