/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/embed",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "frame-src 'self' https://ss-dev-portfolio.netlify.app;",
                    },
                ],
            }
        ]
    }
};

export default nextConfig;
