const {GET_POST, IS_LOADING} = require('../types')

const iState = {
    isLoading: true,
    posts: [],
}

const PostReducer = (state = iState, action) => {
    switch(action.type) {
        case IS_LOADING:
            return { ...state, isLoading: action.payload}
        case GET_POST:
            return { ...state, posts: action.payload}
        default:
            return { ...state}
    }
}

export default PostReducer