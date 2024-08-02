// 文章数据结构
export interface ArticleItemProps {
    id?: number
    title?: string
    authorName?: string
    authorAvatar?: string
    content?: string
    imageUrl?: string
    likeCount?: number
    tags: string[]
}
// 文章响应数据结构
export interface ArticleResponse {
    success: boolean
    data: ArticleItemProps[]
}
// 特殊（单）文章响应数据结构
export interface IndependentArticleResponse {
    success: boolean
    data: ArticleItemProps
}
