import instance from '../axios'
import { ArticleItemProps } from '@/types/commonType/articleType'

// 获取对应页数的文章 10个文章为一页
export const getArticle = async (data: number) => {
    return instance.get('/getArticle', { params: { batch: data } })
}

// 获取特殊文章
export const getSpecialArticle = async (
    name: string
): Promise<ArticleItemProps> => {
    const response = await instance.get<ArticleItemProps>(
        '/getSpecialArticle',
        {
            params: { ArticleName: name },
        }
    )
    return response.data
}
