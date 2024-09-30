/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
    env: {
        NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            }
        ]
    },
})
