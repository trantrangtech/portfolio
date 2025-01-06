/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Thêm dòng này
    basePath: '/portfolio', // Thêm tên repository của bạn
    images: {
        unoptimized: true
    },
    distDir:'out',
};

export default nextConfig;

