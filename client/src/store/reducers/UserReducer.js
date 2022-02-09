import jwt_decode from "jwt-decode"
const { TOKEN_REQ, IS_LOGGED, USER_ID } = require('../types')



const iState = {
    isLoggedIn: false,
    userToken: {},
    user_id: null
}

if(localStorage.getItem('userToken')){
    const id = jwt_decode(localStorage.getItem('userToken'))
    console.log(id.user_id)
    iState.user_id = id.user_id
    iState.userToken = JSON.parse(localStorage.getItem('userToken'))
    iState.isLoggedIn = true
}


const UserReducer = (state = iState, action) => {
    
    switch (action.type) {
        case USER_ID:
            return { ...state, user_id: action.payload.user_id}
        case TOKEN_REQ:
            return { ...state, userToken: action.payload}
        case IS_LOGGED:
            return { ...state, isLoggedIn: action.payload}
        default:
            return { ...state}
    }
}

export default UserReducer