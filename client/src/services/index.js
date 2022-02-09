import axios from 'axios'

export const GetPosts = async () => {
    try {
        const response = await axios.get('http://localhost:8000/posts/')
        // console.log(response.data)
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetToken = async (user) => {
    try {
        const response = await axios.post('http://localhost:8000/api/token/', user)
        console.log(response)
        return response
    } catch (error) {
        throw error
    }
}

export const RegisterUser = async (user) => {
    console.log(user)
    try {
        const response = await axios.post('http://localhost:8000/api/register/', user)
        console.log(response)
    } catch (error) {
        throw error
    }
}
