import React, { useState, useEffect, useRef, useCallback } from 'react'
import ArticleItem from '@/common/articleItem/mobile/Index'
import styles from './index.module.scss'
import { ArticleItemProps } from '@/types/commonType/articleType'

const articlesPerPage = 10

const Content: React.FC = () => {
    const [articles, setArticles] = useState<ArticleItemProps[]>([])
    const [page, setPage] = useState(1)
    const loader = useRef<HTMLDivElement | null>(null)

    // 触发每一次网络请求
    useEffect(() => {
        fetchArticles(page)
    }, [page])

    const fetchArticles = async (page: number) => {
        const newArticles: ArticleItemProps[] = Array.from(
            { length: articlesPerPage },
            (_, index) => ({
                id: (page - 1) * articlesPerPage + index + 1,
                title: `Article ${index + 1}`,
                authorName: `Author ${index + 1}`,
                authorAvatar: 'https://via.placeholder.com/32',
                content:
                    'This is a short example of article content. It will be truncated if too long...',
                imageUrl: 'https://via.placeholder.com/100',
                likeCount: Math.floor(Math.random() * 100),
                tags: ['Technology'],
            })
        )

        setArticles((prevArticles) => [...prevArticles, ...newArticles])
    }

    const handleObserver = useCallback(
        (entities: IntersectionObserverEntry[]) => {
            const target = entities[0]
            if (target.isIntersecting) {
                setPage((prevPage) => prevPage + 1)
            }
        },
        []
    )

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        }

        const observer = new IntersectionObserver(handleObserver, options)
        const currentLoader = loader.current

        if (currentLoader) {
            observer.observe(currentLoader)
        }

        return () => {
            if (currentLoader) {
                observer.unobserve(currentLoader)
            }
        }
    }, [handleObserver])

    // Click Funtion
    const handleClick = (id: number) => {
        console.log(`Article ID: ${id}`)
    }

    return (
        <div className={styles.content}>
            {articles.map((article) => (
                <div
                    key={article.id}
                    onClick={() => handleClick(article.id ?? 0)}
                >
                    <ArticleItem {...article} />
                </div>
            ))}
            <div ref={loader} className={styles.loader}>
                Loading more articles...
            </div>
        </div>
    )
}

export default Content
