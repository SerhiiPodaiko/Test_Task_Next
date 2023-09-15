'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import styles from './Error.module.css'
import { PAGE_SLUGS } from '@constants/pages'
import NotFoundImage from '@public/images/error-bg.jpeg'

const CustomError = ({ error, reset }: { error: Error, reset: () => void }) => {
    const router = useRouter()

    return (
        <section className={styles.error}>
            <div className={styles.errorContainer}>
                <h2 className={styles.errorTitle}>Something went wrong!</h2>
                <hr/>
                {
                    error?.message ? (
                        <p className={styles.errorMessage}>
                            Error detail: {error.message}
                        </p>
                    ) : null
                }
                <div className={styles.errorBtnWrapper}>
                    <button className={styles.errorBtn} onClick={() => router.push(PAGE_SLUGS.home)}>
                        Back to Home
                    </button>
                    <button className={styles.errorBtn} onClick={() => reset()}>
                        Try again
                    </button>
                </div>
            </div>
            <Image src={NotFoundImage} alt='Not-found | 404' className={styles.errorImage} />
        </section>
    )
}

export default CustomError