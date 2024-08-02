import axios, { InternalAxiosRequestConfig, AxiosInstance } from 'axios'

//  Axios 实例
const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001/', // 设置基本URL
    timeout: 5000, // 设置超时时间
})

// 请求拦截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (config.url) {
            // 给请求的 url 前面加上 '/api/' 前缀
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
        // 对响应数据做一些处理，比如解析响应结果
        return response.data
    },
    (error) => {
        // 对响应错误做些什么
        return Promise.reject(error)
    }
)

export default instance
