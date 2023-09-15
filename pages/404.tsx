'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { PAGE_SLUGS } from '@constants/pages'
import NotFoundImage from '@public/images/error-bg.jpeg'

const NotFoundPage = () => {
    const router = useRouter()

    useEffect(() => {
        const redirect = setTimeout(() => router.push(PAGE_SLUGS.home), 3000)

        return () => clearTimeout(redirect)
    }, [router])

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={NotFoundImage} alt='Not-found | 404' />
        </div>
    )
}

export default NotFoundPage