import axios from 'axios'

// const BASE_URL = process.env.NODE_ENV === 'production' ?  'https://parasocialess.herokuapp.com' : 'http://localhost:8000'

export const GetPosts = async (n) => {
    try {
        const response = await axios.get(`https://parasocialess.herokuapp.com/posts/?page=${n}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const PostPost = async (post) => {
    try {
        await axios.post(`https://parasocialess.herokuapp.com/posts/`, post)

    } catch (error) {
        throw error
    }
}

export const DeletePost = async (id) => {
    try {
        await axios.delete(`https://parasocialess.herokuapp.com/posts/${id}`)
    } catch (error) {
        throw error
    }
}

export const GetUser = async (id) => {
    try {
        const response = await axios.get(`https://parasocialess.herokuapp.com/users/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetToken = async (user) => {
    try {
        const response = await axios.post(`https://parasocialess.herokuapp.com/api/token/`, user)
        return response
    } catch (error) {
        throw error
    }
}

export const RegisterUser = async (user) => {
    try {
        await axios.post(`https://parasocialess.herokuapp.com/api/register/`, user)
    } catch (error) {
        throw error
    }
}

export const UpdateUser = async (user, id) => {
    try {
        await axios.put(`https://parasocialess.herokuapp.com/users/${id}`, user)
    } catch (error) {
        throw error
    }
}

export const DeleteUser = async (id) => {
    try {
        await axios.delete(`https://parasocialess.herokuapp.com/users/${id}`)
    } catch (error) {
        throw error
    }
}

export const VerifyLike = async (postId, userId) => {
    try {
        const response = await axios.get(`https://parasocialess.herokuapp.com/posts/${postId}`)
        let resArray = []
        let obj = {}
        for(let i = 0; i < response.data.likes.length; i++){
            let resLikes = await axios.get(`${response.data.likes[i]}`)
            resArray.push(resLikes.data.user_id)
            obj = resLikes.data
        }
        if(resArray.includes(userId)){
            if(obj.user_id === userId){
                await axios.delete(`https://parasocialess.herokuapp.com/likes/${obj.id}`)
            }
        } else if (!resArray.includes(userId)){
            await axios.post(`https://parasocialess.herokuapp.com/likes/`, {
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