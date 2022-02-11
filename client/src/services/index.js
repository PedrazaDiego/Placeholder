import axios from 'axios'

export const GetPosts = async (id) => {
    try {
        if(id){
            return
        } else {
            const response = await axios.get('http://localhost:8000/posts/')
            return response.data
        }
    } catch (error) {
        throw error
    }
}

export const PostPost = async (post) => {
    try {
        await axios.post(`http://localhost:8000/posts/`, post)

    } catch (error) {
        throw error
    }
}

export const DeletePost = async (id) => {
    try {
        await axios.delete(`http://localhost:8000/posts/${id}`)
    } catch (error) {
        throw error
    }
}

export const GetUser = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/users/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetToken = async (user) => {
    try {
        const response = await axios.post('http://localhost:8000/api/token/', user)
        return response
    } catch (error) {
        throw error
    }
}

export const RegisterUser = async (user) => {
    try {
        await axios.post('http://localhost:8000/api/register/', user)
    } catch (error) {
        throw error
    }
}

export const UpdateUser = async (user, id) => {
    try {
        await axios.put(`http://localhost:8000/users/${id}`, user)
    } catch (error) {
        throw error
    }
}

export const DeleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:8000/users/${id}`)
    } catch (error) {
        throw error
    }
}

export const VerifyLike = async (postId, userId) => {
    try {
        const response = await axios.get(`http://localhost:8000/posts/${postId}`)
        let resArray = []
        let obj = {}
        for(let i = 0; i < response.data.likes.length; i++){
            let resLikes = await axios.get(`${response.data.likes[i]}`)
            resArray.push(resLikes.data.user_id)
            obj = resLikes.data
        }
        if(resArray.includes(userId)){
            if(obj.user_id === userId){
                await axios.delete(`http://localhost:8000/likes/${obj.id}`)
            }
        } else if (!resArray.includes(userId)){
            await axios.post(`http://localhost:8000/likes/`, {
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