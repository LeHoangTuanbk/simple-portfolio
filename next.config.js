/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname:'newsroom.churchofjesuschrist.org'
            }
        ]
    }

}

module.exports = nextConfig
