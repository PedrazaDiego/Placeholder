const {GET_POST, IS_LOADING, CURRENT, COUNT } = require('../types')

const iState = {
    count: null,
    isLoading: true,
    current: null,
    posts: [],
}

const PostReducer = (state = iState, action) => {
    switch(action.type) {
        case IS_LOADING:
            return { ...state, isLoading: action.payload}
        case CURRENT:
            return { ...state, current: action.payload}
        case GET_POST:
            return { ...state, posts: [...state.posts, ...action.payload]}
        case COUNT:
            return { ...state, count: action.payload}
        default:
            return { ...state}
    }
}

export default PostReducer