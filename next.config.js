/** @type {import('next').NextConfig} */
const moduleExports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        MONGODB_URL: process.env.MONGODB_URL
    },
    images: {
        domains: ['https://www.tailwindui.com']
    }
};

module.exports = moduleExports;