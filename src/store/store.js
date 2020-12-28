import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { AuthReducer } from './reducers/auth'
import { ChannelReducer } from './reducers/channel'

const rootReducer = combineReducers({
	auth: AuthReducer,
	channel: ChannelReducer
})

export const store = createStore(rootReducer, composeWithDevTools())
