/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for static HTML export
    basePath: '/portfolio', // Your repo name
    images: {
        unoptimized: true, // Required for static export
    },
    assetPrefix: '/portfolio/', // Your repo name with trailing slash
 };

export default nextConfig;

