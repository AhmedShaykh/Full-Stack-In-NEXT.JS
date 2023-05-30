/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        NEXT_PUBLIC_SANITY_PROJECT_ID: "zokqw1p0",
        NEXT_PUBLIC_SANITY_DATASET: "production",
        NEXT_PUBLIC_API_VERSION: "2023-05-27",
        NEXT_PUBLIC_SANITY_ACCESS_TOKEN: "sk6bSUbJpqHByngIpM9fc3uZV04MkITZlIT9ZJsGjTxEY1HII0TBzbHw9FBY8ktGCLZLlJsCFJxfJ6vK2G3flcmkqrfQagkcUdLcv7h3MI6va9ySQjJlxeB1fppL2zQhXpDPS5EV65186DanvoGHYYjRbTjaKgoQ5ZddKzgg5OaB1ovaopH4"
    }
};

module.exports = nextConfig;