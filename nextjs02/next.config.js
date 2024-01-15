/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async() => {
        return [{
            source: '/student',
            destination: '/',
            permanent: false
        }]
    }
}

module.exports = nextConfig