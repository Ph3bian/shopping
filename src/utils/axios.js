import axios from 'axios'
import config from './config'
import { getToken } from './functions'

let Axios = axios.create({
    baseURL: config.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})


Axios.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) config.headers.Authorization = `Bearer ${token}`
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default Axios
