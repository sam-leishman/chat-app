import React, { Component } from 'react';

class ChannelInput extends Component {
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        className="channel-submit-input"
                    />
                </form>
                <button
                    className='submit-button'
                    type='submit'
                >
                    Send
                </button>
            </div>
        )
    }
}

export default ChannelInput;