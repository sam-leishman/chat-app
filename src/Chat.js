import React, { Component } from 'react';
import { store } from './App';

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
            <div>
                {messages}
            </div>
        )
    }
}

export default Chat;