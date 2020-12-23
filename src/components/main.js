import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
// import { time } from './date.js'

export function reducer(state, action) {
    if (action.type === 'ADD_MESSAGE') {
        const messageToAdd = {
            text: action.text,
            timestamp: action.time,
            id: uuidv4(),
        }
        const channelIndex = state.channels.findIndex(c => c.id === action.channelId)
        const lastChannel = state.channels[channelIndex]
        const newChannel = {
            ...lastChannel,
            messages: lastChannel.messages.concat(messageToAdd)
        }
        return {
            ...state,
            channels: [
                ...state.channels.slice(0, channelIndex),
                newChannel,
                ...state.channels.slice(channelIndex + 1, state.channels.length)
            ]
        }
    } else if (action.type === 'DELETE_MESSAGE') {
        const channelIndex = state.channels.findIndex(
            c => c.messages.find(message => (
                message.id === action.id
            ))
        )
        const lastChannel = state.channels[channelIndex]
        const newChannel = {
            ...lastChannel,
            messages: lastChannel.messages.filter(message => (
                message.id !== action.id
            ))
        }
        return {
            ...state,
            channels: [
                ...state.channels.slice(0, channelIndex),
                newChannel,
                ...state.channels.slice(channelIndex + 1, state.channels.length)
            ]
        }
    } else if (action.type === 'OPEN_CHANNEL') {
        return {
            ...state,
            currentChannelId: action.id,
        }
    } else {
        return state;
    }
}

export const initialState = {
    currentChannelId: '1-fca2',
    channels: [
        {
            id: '1-fca2',
            title: 'Test Channel 1',
            messages: [
                {
                    text: 'Test',
                    timestamp: '(timestamp)',
                    id: uuidv4(),
                },
            ],
        },
        {
            id: '2-be91',
            title: 'Test Channel 2',
            messages: [],
        },
    ],
};

export const store = createStore(reducer, initialState);