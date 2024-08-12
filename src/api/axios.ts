import axios, { InternalAxiosRequestConfig, AxiosInstance } from 'axios'

//  Axios
const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
    // baseURL: 'http://43.153.134.137/',
    timeout: 5000,
})

// 请求拦截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (config.url) {
            /**
             * API: base + router  eg: '/ap/getData'
             */
            if (!config.url.startsWith('/api/')) {
                config.url = `/api${config.url}`
            }
        } else {
            console.error('URL is undefined in request config')
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance
