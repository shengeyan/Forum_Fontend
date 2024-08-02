import React from 'react'
import { IconThumbUp, IconMessage } from '@arco-design/web-react/icon'
import styles from './index.module.scss'
import { ArticleItemProps } from '@/types/commonType/articleType'

const ArticleItem: React.FC<ArticleItemProps> = ({
    title,
    authorName,
    authorAvatar,
    content,
    imageUrl,
    likeCount,
    tag,
}) => {
    return (
        <div className={styles.articleItem}>
            <div className={styles.articleContent}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.authorInfo}>
                    <img
                        src={authorAvatar}
                        alt={authorName}
                        className={styles.avatar}
                    />
                    <span className={styles.authorName}>{authorName}</span>
                </div>
                <div className={styles.content}>
                    <p>{content}</p>
                    <img src={imageUrl} alt={title} className={styles.image} />
                </div>
                <div className={styles.footer}>
                    <div className={styles.likes}>
                        <IconThumbUp /> {likeCount}
                    </div>
                    <div className={styles.comments}>
                        <IconMessage /> 评论
                    </div>
                    <span className={styles.tag}>{tag}</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleItem
