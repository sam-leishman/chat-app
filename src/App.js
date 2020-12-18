import './App.css';
import { Component } from 'react';
import { createStore } from 'redux';
import Header from './Header.js';
import Chat from './Chat.js';
import ChatInput from './ChatInput.js'
import ServerName from './ServerName'

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

function App() {
  return (
    <div className='container-fluid'>
      <div class="row no-gutters header">
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
          <div className='messages-box'>Messages box</div>
          {/* <Chat /> */}
          <div className='message-input'>
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
