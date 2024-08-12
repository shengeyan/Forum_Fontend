import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styles from './index.module.scss'
import { ArticleItemProps } from '@/types/commonType/articleType'

const ArticleDetail: React.FC<Partial<ArticleItemProps>> = (props) => {
    const location = useLocation()

    // 合并 props 和 state 中的数据
    const data = {
        title: props.title || location.state?.title,
        authorName: props.authorName || location.state?.authorName,
        authorAvatar: props.authorAvatar || location.state?.authorAvatar,
        content: props.content || location.state?.content,
        tags: props.tags || location.state?.tags || [],
    }

    // 判断关键字段是否存在
    if (!data.title) {
        return <div>No detail information available</div>
    }

    return (
        <div className={styles.container}>
            {/* Title */}
            <h1 className={styles.title}>{data.title}</h1>

            {/* Author info */}
            <div className={styles.author}>
                <img
                    src={data.authorAvatar}
                    alt={data.authorName}
                    className={styles.authorAvatar}
                />
                <div>
                    <div className={styles.authorName}>{data.authorName}</div>
                    <div className={styles.tags}>
                        {data.tags.map((t: string, index: number) => (
                            <span key={index} className={styles.tag}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className={`${styles.content} ${styles.markdown}`}>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {data.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetail
