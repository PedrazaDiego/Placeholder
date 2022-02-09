import { GetToken, GetUser } from '../../services/index'
import { TOKEN_REQ, IS_LOGGED, USER_ID, IS_LOADING, GET_USER } from '../types'
import jwt_decode from "jwt-decode"

export const LoadToken = (user) => {
    return async (dispatch) => {
        try {
            const token = await GetToken(user)
            // console.log(token)
            if (token.status === 200 && token.data.refresh){
                localStorage.setItem('userToken', JSON.stringify(token.data))
                const id = jwt_decode(localStorage.getItem('userToken'))
                dispatch({
                    type: IS_LOGGED,
                    payload: true
                })
                dispatch({
                    type: TOKEN_REQ,
                    payload: token.data
                })
                dispatch({
                    type: USER_ID,
                    payload: id
                })
            }
        } catch (error) {
            throw error
        }
    }
}

export const LoadUser = (id) => {
    return async (dispatch) => {
        try {
            const user = await GetUser(id)
            let filteredUser = {
                email: user.email,
                username: user.user_name,
                first_name: user.first_name,
                about: user.about,
                start_date: user.start_date
            }
            dispatch({
                type: IS_LOADING,
                payload: false
            })
            dispatch({
                type: GET_USER,
                payload: filteredUser
            })
        } catch (error) {
            throw error
        }
    }
}