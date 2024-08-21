import React from 'react'
import styles from './index.module.scss'

import { Comment, Button, Input } from '@arco-design/web-react'
import {
    IconHeart,
    IconMessage,
    IconHeartFill,
    IconStarFill,
    IconStar,
} from '@arco-design/web-react/icon'
const TextArea = Input.TextArea

import DefaultInfo from '@/types/defaultType/defaultType'

const CommentSection: React.FC = () => {
    const [likes, setLikes] = React.useState<number[]>([])
    const [stars, setStars] = React.useState<number[]>([])

    const commentsData = [
        {
            id: 1,
            author: 'Socrates',
            avatar: DefaultInfo.defaultAvatarURL,
            content: 'Comment body content.',
            datetime: '2024-08-13 12:00',
            replyId: null, // null 表示这是一条独立评论
        },
        {
            id: 2,
            author: 'Balzac',
            avatar: DefaultInfo.defaultAvatarURL,
            content: 'Reply to Socrates.',
            datetime: '2024-08-13 12:05',
            replyId: 1, // 表示回复id为1的评论
        },
        {
            id: 3,
            author: 'Austen',
            avatar: DefaultInfo.defaultAvatarURL,
            content: 'Another reply to Socrates.',
            datetime: '2024-08-13 12:10',
            replyId: 1,
        },
        {
            id: 4,
            author: 'Plato',
            avatar: DefaultInfo.defaultAvatarURL,
            content: 'A new independent comment.',
            datetime: '2024-08-13 12:15',
            replyId: null,
        },
    ]

    const sortedComments = commentsData.sort(
        (a, b) =>
            new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
    )

    const renderComments = (parentId: number | null = null) => {
        return sortedComments
            .filter((comment) => comment.replyId === parentId)
            .map((comment) => {
                const like = likes.includes(comment.id)
                const star = stars.includes(comment.id)

                return (
                    <Comment
                        className={styles.comment}
                        key={comment.id}
                        author={comment.author}
                        avatar={comment.avatar}
                        content={comment.content}
                        datetime={comment.datetime}
                        actions={[
                            <button
                                className={styles.customCommentAction}
                                key="heart"
                                onClick={() =>
                                    setLikes(
                                        like
                                            ? likes.filter(
                                                  (x) => x !== comment.id
                                              )
                                            : [...likes, comment.id]
                                    )
                                }
                            >
                                {like ? (
                                    <IconHeartFill
                                        style={{ color: '#f53f3f' }}
                                    />
                                ) : (
                                    <IconHeart />
                                )}
                            </button>,
                            <button
                                className={styles.customCommentAction}
                                key="star"
                                onClick={() =>
                                    setStars(
                                        star
                                            ? stars.filter(
                                                  (x) => x !== comment.id
                                              )
                                            : [...stars, comment.id]
                                    )
                                }
                            >
                                {star ? (
                                    <IconStarFill
                                        style={{ color: '#ffb400' }}
                                    />
                                ) : (
                                    <IconStar />
                                )}
                            </button>,
                            <button
                                className={styles.customCommentAction}
                                key="reply"
                            >
                                <IconMessage /> Reply
                            </button>,
                        ]}
                    >
                        {renderComments(comment.id)}
                    </Comment>
                )
            })
    }

    return (
        <div className={styles.container}>
            {/* Show comment*/}
            <div className={styles.showArea}>
                <div className={styles.showLayout}>{renderComments()}</div>
            </div>
            {/* Send  comment*/}
            <div className={styles.sectionArea}>
                <div className={styles.textArea}>
                    <TextArea
                        placeholder="Enter something"
                        defaultValue="评论区比正文还精彩，快来加点料吧！"
                        autoSize={{ minRows: 6, maxRows: 6 }}
                    />
                </div>

                <div className={styles.buttonArea}>
                    <Button type="secondary">撤销</Button>
                    <Button type="secondary">发送</Button>
                </div>
            </div>
        </div>
    )
}

export default CommentSection
