import React, { Component } from 'react';
import { store } from './main';

class ChannelInput extends Component {
    state = {
        value: '',
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value === '') {
            return;
        }
        store.dispatch({
            type: 'ADD_CHANNEL',
            title: this.state.value,
        })
        this.setState({
            value: '',
        })
    }

    render() {
        return (
            <div className='input-form'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.onChange}
                        value={this.state.value}
                        type="text"
                        className="channel-submit-input"
                        placeholder='New channel'
                    />
                </form>
                <button
                    onClick={this.handleSubmit}
                    className='submit-button btn'
                    type='submit'
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        )
    }
}

export default ChannelInput;