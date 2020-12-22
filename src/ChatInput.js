import { Component } from "react";
import { store } from "./main.js";

class ChatInput extends Component {
    state = {
        value: '',
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        store.dispatch({
            type: 'ADD_MESSAGE',
            text: this.state.value,
            channelId: this.props.channelId,
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
                        type='text'
                    />
                </form>
                <button
                    onClick={this.handleSubmit}
                    className='submit-button btn'
                    type='submit'
                >
                    Send
                </button>
            </div>
        )
    }
}

export default ChatInput;