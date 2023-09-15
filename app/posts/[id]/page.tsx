import { Metadata } from 'next'
import Link from 'next/link'
import classnames from 'classnames'

import { PAGE_SLUGS } from '@constants/pages'

import styles from '../page.module.css'
import Preloader from '@ui/preloader/Preloader'
import { fetchGetPostId } from '@services/posts'

type PostProps = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: PostProps): Promise<Metadata> {
    const post = await fetchGetPostId(id)

    return {
        title: 'Post - ' + post.id,
        description: post.body
    }
}

const Post = async ({ params: { id } }: PostProps) => {
    const post = await fetchGetPostId(id)

    if(!post) return <Preloader />

    return (
        <section className={styles.postDetail}>
            <Link href={PAGE_SLUGS.home} className={styles.postDetailLink}>
                Back to Home
            </Link>
            <div className={classnames('container', styles.postDetailContainer)}>
                <h1 className={styles.postDetailTitle}>Post: {post.id}</h1>
                <h3 className={styles.postDetailSubTitle}>{post.title}</h3>
                <p className={styles.postDetailBody}>{post.body}</p>
            </div>
        </section>
    )
}

export default Post

// Якщо використовувати NextJS 12 версії, то можна реалізувати через наведену функції нижче

// 1. export async function getServerSideProps({ params ) {
//     const posts = await fetchGetAllPosts(params.id)
//
//     return {
//         props: { posts }
//     }
// }

// 2. Передати в props > Post
