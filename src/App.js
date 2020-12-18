import './App.css';
import { Component } from 'react';
import { createStore } from 'redux';

function App() {
  return (
    <div className='container-fluid'>
      <header className=''>Header</header>
      <div className='main-page row no-gutters'>
        <div className='channels col-3'>Channels</div>
        {/* <Channels /> */}
        <div className='chat-area col-9'>
          <div className='messages-box'>Messages box</div>
          {/* <Chat /> */}
          <div className='message-input'>Input message</div>
          {/* <ChatInput /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
