import { Component } from "react";
import { store } from "./main.js";
import { animateScroll } from "react-scroll";

class ChatInput extends Component {
    state = {
        value: '',
    }

    scrollToBottom = () => {
        animateScroll.scrollToBottom({
          containerId: "message-overflow"
        });
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.value === '') {
            return;
        }
        let currentTime = '';
        function clearTime() {
            currentTime = '';
        }
        function time() {
            var today = new Date();

            let hours = today.getHours();
            let minutes = today.getMinutes();
            let amOrPm = '';

            if (hours > 11) {
                if (hours > 12) {
                    hours -= 12;
                }
                amOrPm = 'PM'
            } else if (hours < 12) {
                amOrPm = 'AM'
            }

            let zero = ''
            if (minutes < 10) {
                zero = 0
            }

            currentTime = `${hours}:${zero}${minutes} ${amOrPm}`
        }
        clearTime();
        time();
        store.dispatch({
            type: 'ADD_MESSAGE',
            text: this.state.value,
            time: currentTime,
            channelId: this.props.channelId,
        })
        this.setState({
            value: '',
        }, this.scrollToBottom)
    }

    render() {
        return (
            <div className='input-form'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.onChange}
                        value={this.state.value}
                        type='text'
                        placeholder='Send a message!'
                        maxLength={300}
                    />
                </form>
                <button
                    onClick={this.handleSubmit}
                    className='submit-button btn'
                    type='submit'
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        )
    }
}

export default ChatInput;