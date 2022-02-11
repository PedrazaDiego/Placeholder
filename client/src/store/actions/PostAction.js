import { GetPosts, VerifyLike} from '../../services/index'
import {GET_POST, IS_LOADING, CURRENT, UPDATE} from '../types'

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

export const ToggleState = (postId, userId, toState) => {
    return async (dispatch) => {
        try {
            await VerifyLike(postId, userId)
            dispatch({
                type: UPDATE,
                payload: toState
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