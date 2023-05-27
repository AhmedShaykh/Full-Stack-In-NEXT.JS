/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: "zokqw1p0",
        NEXT_PUBLIC_SANITY_DATASET: "production"
    },
};

module.exports = nextConfig;