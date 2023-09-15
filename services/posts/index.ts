const processBuild =
    process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.NEXT_DEV_API_URL


export const fetchGetAllPosts = async () => {
    try {
        const response = await fetch(`${processBuild}/posts`, {
            cache: 'force-cache'
        })

        if (!response.ok) throw new Error('Unable to fetch posts')

        return await response.json()
    } catch (error: any) {
        console.log('Error:', error.message)
    }
}

export const fetchGetPostId = async (id: string) => {
    try {
        const response = await fetch(`${processBuild}/posts/${id}`)

        if (!response.ok) throw new Error('Unable to fetch posts')

        return await response.json()
    } catch (error: any) {
        console.log('Error:', error.message)
    }
}