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
        const response = await axios.post(`http://localhost:8000/posts/`, post)
        console.log(response)
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