import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { Button } from '@arco-design/web-react'
import { IconTags, IconApps } from '@arco-design/web-react/icon'
import { Tag } from './index'

// Tags Info
const tags: Tag[] = [
    { icon: '🦊', text: '我是标签1' },
    { icon: '🦝', text: '我是标签2' },
    { icon: '🦄', text: '我是标签3' },
    { icon: '🐭', text: '我是标签4' },
    { icon: '🐇', text: '我是标签5' },
    { icon: '🐤', text: '我是标签6' },
    { icon: '🐣', text: '我是标签7' },
    { icon: '🐿️', text: '我是标签8' },
    { icon: '🐱', text: '我是标签9' },
    { icon: '🐹', text: '我是标签10' },
]

const Sider: React.FC = () => {
    const navigate = useNavigate()

    const handlePublishClick = () => {
        navigate('/publish')
    }

    const handleMoreTagsClick = () => {
        navigate('/tags')
    }

    return (
        <div className={styles.sider}>
            <Button
                className={styles.publishButton}
                onClick={handlePublishClick}
                type="primary"
            >
                发布主题
            </Button>
            <div className={styles.sections}>
                <div className={styles.sectionTitle}>
                    <span>
                        <IconTags />
                    </span>
                    全部主题
                </div>
                <div className={styles.sectionTitle}>
                    <span>
                        <IconApps />
                    </span>
                    标签
                </div>
                <div className={styles.tags}>
                    {tags.map((tag, index) => (
                        <div key={index} className={styles.tag}>
                            <span className={styles.tagIcon}>{tag.icon}</span>
                            <span className={styles.tagText}>{tag.text}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.moreTags} onClick={handleMoreTagsClick}>
                    更多标签...
                </div>
            </div>
        </div>
    )
}

export default Sider
