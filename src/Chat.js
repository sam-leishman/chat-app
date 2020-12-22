import React, { Component } from 'react';
import { store } from './main.js';

import ChatInput from './ChatInput.js'

class Chat extends Component {
    handleClick = (id) => {
        store.dispatch({
            type: 'DELETE_MESSAGE',
            id: id,
        })
    }

    render() {
        const messages = this.props.channel.messages.map((message, index) => (
            <div key={index} className='message flex'>
                {message.text}
                <div>
                    <span className='timestamp flex'>{message.timestamp}</span>
                    <button className='btn' onClick={() => this.handleClick(message.id)}><i className="fas fa-trash trash-button"></i></button>
                </div>
            </div>
        ))

        return (
            <div className='component-with-input'>
                <div>
                    {messages}
                </div>
                <div className='message-input'>
                    <ChatInput channelId={this.props.channel.id} />
                </div>
            </div>
        )
    }
}

export default Chat;