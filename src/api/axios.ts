import axios, { InternalAxiosRequestConfig, AxiosInstance } from 'axios'

//  Axios
const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
})
console.log('e', import.meta.env.VITE_BASE_URL)

// 请求拦截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (config.url) {
            /**
             * API: base + router  eg: '/api/getData'
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
