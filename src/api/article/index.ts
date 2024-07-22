import instance from '../axios'

export const getArticle = async (data: number) => {
    return instance.get('/getArticle', { params: { page: data } })
}
