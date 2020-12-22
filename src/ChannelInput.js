import React, { Component } from 'react';

class ChannelInput extends Component {
    render() {
        return (
            <div className='input-form'>
                <form>
                    <input
                        type="text"
                        className="channel-submit-input"
                    />
                </form>
                <button
                    className='submit-button btn'
                    type='submit'
                >
                    Send
                </button>
            </div>
        )
    }
}

export default ChannelInput;