import Link from 'next/link'

import styles from './Posts.module.css'
import { PAGE_SLUGS } from '@constants/pages'
import { Post } from '@services/posts/models'

const PostCart = ({ post }: { post: Post }) => {
    return (
        <div key={post.id} className={styles.post}>
            <h3>{post.title}</h3>
            <hr/>
            <p>{post.body}</p>
            <Link href={`${PAGE_SLUGS.post}/${post.id}`} className={styles.postBtn}>
                Detail
            </Link>
        </div>
    )
}

export default PostCart