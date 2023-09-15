/** @type {import('next').NextConfig} */
const process = require('process')
const path = require('path')

const {
    ENV_VAR,
    NEXT_PUBLIC_API_URL,
    NEXT_DEV_API_URL,
    NEXT_PUBLIC_URL,
    NEXT_DEV_URL,
    NEXT_MY_EXPERIENCE
} = process.env

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    env: {
        ENV_VAR,
        NEXT_PUBLIC_API_URL,
        NEXT_DEV_API_URL,
        NEXT_PUBLIC_URL,
        NEXT_DEV_URL,
        NEXT_MY_EXPERIENCE
    },
    async headers() {
        return [
            {
                source: '/favicon.png',
                headers: [
                    {
                        key: 'Link',
                        value: '/favicon.png',
                    },
                ],
            },
        ]
    }
}

module.exports = nextConfig
