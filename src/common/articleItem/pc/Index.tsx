/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import styles from './index.module.scss'
import { ArticleItemProps } from '@/types/commonType/articleType'

const Index: React.FC<ArticleItemProps> = ({
    title,
    authorName,
    authorAvatar,
    content,
    imageUrl,
    likeCount,
    tags,
}) => {
    // 清除HTML标签，限制内容长度
    const stripHtml = (html: string) => {
        const tmp = document.createElement('div')
        tmp.innerHTML = html
        const text = tmp.textContent || tmp.innerText || ''
        return text.length > 200 ? text.substring(0, 200) + '...' : text
    }

    return (
        <div className={styles.articleItem}>
            {/* content */}
            <div className={styles.content}>
                {/* header */}
                {/* <div className={styles.header}>
                    <img
                        src={authorAvatar}
                        alt={authorName}
                        className={styles.authorAvatar}
                    />
                    <span className={styles.authorName}>{authorName}</span>
                    <span className={styles.date}>
                        {new Date().toLocaleDateString()}
                    </span>
                </div> */}
                {/* title */}
                <div className={styles.title}>{title}</div>
                {/* content */}
                <div className={styles.contentText}>
                    {stripHtml(content || '')}
                </div>
                {/* footer */}
                <div className={styles.footer}>
                    <div className={styles.tags}>
                        {tags.map((t, index) => (
                            <span key={index} className={styles.tag}>
                                {t}
                            </span>
                        ))}
                    </div>
                    <span className={styles.authorName}>{authorName}</span>
                    &nbsp;| &nbsp;
                    <span className={styles.likeCount}>{likeCount} Likes</span>
                </div>
            </div>
            {/* img */}
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
        </div>
    )
}

export default Index
