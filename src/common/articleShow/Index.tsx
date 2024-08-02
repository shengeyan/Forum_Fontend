/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styles from './index.module.scss'
import { ArticleItemProps } from '@/types/commonType/articleType'

const ArticleDetail: React.FC<ArticleItemProps> = ({
    title,
    authorName,
    authorAvatar,
    content,
    imageUrl,
    likeCount,
    tags = [],
}) => {
    console.log('tags:', tags) // 调试输出
    return (
        <div className={styles.container}>
            {/* title */}
            <h1 className={styles.title}>{title}</h1>
            {/* author info */}
            <div className={styles.author}>
                <img
                    src={authorAvatar}
                    alt={authorName}
                    className={styles.authorAvatar}
                />
                <div>
                    <div className={styles.authorName}>{authorName}</div>
                    <div className={styles.tags}>
                        {tags.map((t, index) => (
                            <span key={index} className={styles.tag}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            {/* content  */}
            <div className={`${styles.content} ${styles.markdown}`}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {content}
                </ReactMarkdown>
            </div>
            {/* TODO:拓展功能可以放在这里，例如评论区 */}
            <div></div>
        </div>
    )
}

export default ArticleDetail
