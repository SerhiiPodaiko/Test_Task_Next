import classnames from 'classnames'

import styles from './Posts.module.css'
import Preloader from '@ui/preloader/Preloader'
import { Post } from '@services/posts/models'
import { fetchGetAllPosts } from '@services/posts'
import PostCart from '@components/posts/PostCart'

const Posts = async () => {
    const posts = await fetchGetAllPosts()

    if (!posts) return <Preloader />

    console.log('context', posts)

    return (
        <section className={styles.posts}>
            <header className={styles.postsHead}>
                <div className='container'>
                    <h4>Posts: {posts.length}</h4>
                </div>
            </header>
            <div className={classnames('container', styles.postsContainer)}>
                { posts.map((post: Post) => <PostCart key={post.id} post={post} /> )}
            </div>
        </section>
    )
}

export default Posts

// Якщо використовувати NextJS 12 версії, то можна реалізувати через наведену функції нижче

// export async function getStaticProps() {
//     const posts = await fetchGetAllPosts()
//
//     return {
//         props: { posts }
//     }
// }