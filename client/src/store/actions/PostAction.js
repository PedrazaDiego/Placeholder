import { GetPosts} from '../../services/index'
import {GET_POST, IS_LOADING} from '../types'

export const LoadPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await GetPosts()
            // console.log(posts)
            dispatch({
                type: GET_POST,
                payload: posts
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