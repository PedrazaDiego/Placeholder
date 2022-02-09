import { GetToken } from '../../services/index'
import { TOKEN_REQ, IS_LOGGED, USER_ID } from '../types'
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