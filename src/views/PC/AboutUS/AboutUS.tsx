import React, { useEffect, useState } from 'react'
import ArticleDetail from '@/common/articleDetail/ArticleDetail'
import { ArticleItemProps } from '@/types/commonType/articleType'
import { getSpecialArticle } from '@/api/article'
import styles from './index.module.scss'

const AboutUS: React.FC = () => {
    const [article, setArticle] = useState<ArticleItemProps>({
        id: 0,
        title: '',
        authorName: '',
        authorAvatar: '',
        content: '',
        imageUrl: '',
        likeCount: 0,
        tags: [],
    })

    // 获取关于我们文章
    useEffect(() => {
        const InitData = async () => {
            try {
                const resData = await getSpecialArticle('aboutUS')
                setArticle(resData)
            } catch (error) {
                console.error('Error fetching the article:', error)
            }
        }

        InitData()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <ArticleDetail key={article?.id} {...article}></ArticleDetail>
            </div>
        </div>
    )
}

export default AboutUS
