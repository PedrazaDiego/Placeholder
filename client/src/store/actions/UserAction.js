import { GetToken, GetUser } from '../../services/index'
import jwt_decode from "jwt-decode"
import axios from 'axios'

import { TOKEN_REQ, IS_LOGGED, USER_ID, IS_LOADING, GET_USER } from '../types'



export const LoadToken = (user) => {
    return async (dispatch) => {
        try {
            const token = await GetToken(user)
            if (token.status === 200 && token.data.refresh) {
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
                    payload: id.user_id
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
            let posts = []
            for (let i = 0; i < user.posts.length; i++) {
                let res = await axios.get(`${user.posts[i]}`)
                posts.push(res.data)
            }
            let filteredUser = {
                email: user.email,
                username: user.user_name,
                first_name: user.first_name,
                about: user.about,
                start_date: user.start_date,
                posts: posts.reverse()
            }
            dispatch({
                type: GET_USER,
                payload: filteredUser
            })
            dispatch({
                type: IS_LOADING,
                payload: false
            })

        } catch (error) {
            throw error
        }
    }
}

export const Loading = (id) => {
    return async (dispatch) => {
        try {
            const user = await GetUser(id)
            let posts = []
            for (let i = 0; i < user.posts.length; i++) {
                let res = await axios.get(`${user.posts[i]}`)
                posts.push(res.data)
            }
            let filteredUser = {
                email: user.email,
                username: user.user_name,
                first_name: user.first_name,
                about: user.about,
                start_date: user.start_date,
                posts: posts.reverse()
            }
            dispatch({
                type: GET_USER,
                payload: filteredUser
            })
            dispatch({
                type: IS_LOADING,
                payload: true
            })

        } catch (error) {
            throw error
        }
    }
}
export const LogOut = () => {
    return (dispatch) => {
        localStorage.removeItem('userToken')
        dispatch({
            type: USER_ID,
            payload: null
        })
        dispatch({
            type: GET_USER,
            payload: false
        })
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        dispatch({
            type: IS_LOGGED,
            payload: false
        })
        dispatch({
            type: TOKEN_REQ,
            payload: {}
        })

    }

}