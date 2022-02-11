import { GetPosts, VerifyLike} from '../../services/index'
import {GET_POST, IS_LOADING, CURRENT, COUNT} from '../types'

export const LoadPosts = (n) => {
    return async (dispatch) => {
        try {
            const posts = await GetPosts(n)
            console.log(posts)
            dispatch({
                type: GET_POST,
                payload: posts.results
            })
            dispatch({
                type: COUNT,
                payload: posts.count
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

export const ToggleState = (postId, userId) => {
    return async () => {
        try {
            await VerifyLike(postId, userId)
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