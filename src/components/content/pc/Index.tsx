import React, { useEffect, useState, useRef } from 'react'
import ArticleItem from '@/common/articleItem/pc/Index'
import styles from './index.module.scss'
import { ArticleItemProps } from '@/types/commonType/articleType'
import { getArticle } from '@/api/article/index'
import { useNavigate } from 'react-router-dom'

const Content: React.FC = () => {
    const [articlesData, setArticlesData] = useState<ArticleItemProps[]>([])
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const observer = useRef<IntersectionObserver | null>(null)
    const loader = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const Init = async () => {
            try {
                const resData = await getArticle(page)

                if (Array.isArray(resData) && resData.length > 0) {
                    setArticlesData((prev) => [...prev, ...resData])
                } else {
                    setHasMore(false)
                }
            } catch (error) {
                console.error('Error fetching articles:', error)
            }
        }

        Init()
    }, [page])

    // TODO: 加强理解
    useEffect(() => {
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prev) => prev + 1)
            }
        })

        if (loader.current) observer.current.observe(loader.current)

        return () => {
            if (observer.current) observer.current.disconnect()
        }
    }, [hasMore])

    const handleClick = (id: number) => {
        const detailInfo = articlesData.find((article) => article.id === id)

        if (detailInfo) {
            navigate(`/blogs/${id}`, { state: { ...detailInfo } })
        } else {
            console.error('Article not found')
        }
    }

    return (
        <div className={styles.content}>
            {/* Init Data */}
            {articlesData.length > 0 ? (
                articlesData.map((article, index) => (
                    <div
                        key={`${article.id}-${index}`}
                        onClick={() => handleClick(article.id ?? 0)}
                    >
                        <ArticleItem {...article} />
                    </div>
                ))
            ) : (
                <div>No articles available</div>
            )}
            {/* Get  More Data */}
            {hasMore ? (
                <div ref={loader} className={styles.loader}>
                    Loading more...
                </div>
            ) : (
                <div className={styles.loader}>已经到底啦</div>
            )}
        </div>
    )
}

export default Content
