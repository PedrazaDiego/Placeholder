import { GetPosts} from '../../services/index'
import {GET_POST, IS_LOADING, CURRENT} from '../types'

export const LoadPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await GetPosts()
            dispatch({
                type: GET_POST,
                payload: posts.reverse()
            })
            dispatch({
                type: IS_LOADING,
                payload: false,
            })
        } catch (error) {
            throw error
        }
    }
}

export const UpdateCurrent = (n) => {
    return (dispatch) => {
        dispatch({
            type: CURRENT,
            payload: n
        })
    }
}