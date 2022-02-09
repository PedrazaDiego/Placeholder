import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import PostReducer from './reducers/PostReducer'
import UserReducer from './reducers/UserReducer'


const store = createStore(
    combineReducers({
        postState: PostReducer, userState: UserReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store