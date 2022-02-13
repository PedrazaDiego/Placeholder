import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ?  'https://parasocialess.herokuapp.com' : process.env.REACT_APP_BASE_URL

export const GetPosts = async (n) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/?page=${n}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const PostPost = async (post) => {
    try {
        await axios.post(`${BASE_URL}/posts/`, post)

    } catch (error) {
        throw error
    }
}

export const DeletePost = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/posts/${id}`)
    } catch (error) {
        throw error
    }
}

export const GetUser = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetToken = async (user) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/token/`, user)
        return response
    } catch (error) {
        throw error
    }
}

export const RegisterUser = async (user) => {
    try {
        await axios.post(`${BASE_URL}/api/register/`, user)
    } catch (error) {
        throw error
    }
}

export const UpdateUser = async (user, id) => {
    try {
        await axios.put(`${BASE_URL}/users/${id}`, user)
    } catch (error) {
        throw error
    }
}

export const DeleteUser = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/users/${id}`)
    } catch (error) {
        throw error
    }
}

export const VerifyLike = async (postId, userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts/${postId}`)
        let resArray = []
        let obj = {}
        for(let i = 0; i < response.data.likes.length; i++){
            let resLikes = await axios.get(`${response.data.likes[i]}`)
            resArray.push(resLikes.data.user_id)
            obj = resLikes.data
        }
        if(resArray.includes(userId)){
            if(obj.user_id === userId){
                await axios.delete(`${BASE_URL}/likes/${obj.id}`)
            }
        } else if (!resArray.includes(userId)){
            await axios.post(`${BASE_URL}/likes/`, {
                "user_id": userId,
                "post_id": postId
            })
        } else {
            console.log('something went wrong')
        }
    } catch (error) {
        throw error
    }
}