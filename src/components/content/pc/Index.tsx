import React, { useEffect, useState, useRef } from 'react'
import ArticleItem from '@/common/articleItem/pc/Index'
import styles from './index.module.scss'
import { ArticleItemProps } from '@/types/commonType/articleType'
import { getArticle } from '@/api/article/index'
import { AxiosResponse } from 'axios'

const Content: React.FC = () => {
    const [articlesData, setArticlesData] = useState<ArticleItemProps[]>([])
    const [page, setPage] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const observer = useRef<IntersectionObserver | null>(null)
    const loader = useRef(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const resData: AxiosResponse = await getArticle(page)
                if (resData.data.length > 0) {
                    setArticlesData((prev) => [...prev, ...resData.data])
                } else {
                    setHasMore(false)
                }
            } catch (error) {
                console.error('Error fetching articles:', error)
            }
        }

        getData()
    }, [page])

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

    return (
        <div className={styles.content}>
            {/* Init Data */}
            {articlesData.length > 0 ? (
                articlesData.map((article, index) => (
                    <ArticleItem key={`${article.id}-${index}`} {...article} />
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
