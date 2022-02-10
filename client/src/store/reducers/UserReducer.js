import jwt_decode from "jwt-decode"
const { TOKEN_REQ, IS_LOGGED, USER_ID, IS_LOADING, GET_USER, LOG_OUT } = require('../types')



const iState = {
    isLoading: true,
    isLoggedIn: false,
    userToken: {},
    user_id: null,
    user: false
}

if (localStorage.getItem('userToken')) {
    const id = jwt_decode(localStorage.getItem('userToken'))
    iState.user_id = id.user_id
    iState.userToken = JSON.parse(localStorage.getItem('userToken'))
    iState.isLoggedIn = true
}


const UserReducer = (state = iState, action) => {

    switch (action.type) {
        case IS_LOADING:
            return { ...state, isLoading: action.payload }
        case GET_USER:
            return  {...state, user: action.payload }
        case USER_ID:
            return { ...state, user_id: action.payload}
        case TOKEN_REQ:
            return { ...state, userToken: action.payload }
        case IS_LOGGED:
            return { ...state, isLoggedIn: action.payload }
        case LOG_OUT:
            return { iState }
        default:
            return { ...state }
    }
}

export default UserReducer