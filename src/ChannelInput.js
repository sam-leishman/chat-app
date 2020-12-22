import React, { Component } from 'react';

class ChannelInput extends Component {
    render() {
        return (
            <div className='input-form'>
                <form>
                    <input
                        type="text"
                        className="channel-submit-input"
                        placeholder='New channel'
                    />
                </form>
                <button
                    className='submit-button btn'
                    type='submit'
                >
                    <i class="fas fa-arrow-up"></i>
                </button>
            </div>
        )
    }
}

export default ChannelInput;