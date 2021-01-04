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
        const userInfo = this.props.user;
        console.log(userInfo)

        if (this.props.channel === undefined) {
            return (
                <div><h3 className='no-channel'>Please select a channel</h3></div>
            );
        }

        const messages = this.props.channel.messages.map((message, index) => (
            <div key={index} className='message-wrapper'>
                <img className='profile-pic-icon' src={userInfo.photoURL} alt='profile' />
                <div className='message flex'>
                    {message.text}
                    <div>
                        <span className='timestamp flex'>{message.timestamp}</span>
                        <button className='btn' onClick={() => this.handleClick(message.id)}><i className="fas fa-trash trash-button"></i></button>
                    </div>
                </div>
            </div>
        ))

        return (
            <div className='component-with-input'>
                <div>
                    {messages}
                </div>
                <div>
                    <ChatInput channelId={this.props.channel.id} />
                </div>
            </div>
        )
    }
}

export default Chat;