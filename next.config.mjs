/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for static HTML export
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '', // Chỉ dùng basePath trong môi trường sản xuất
    images: {
        unoptimized: true, // Required for static export
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '', // Chỉ dùng assetPrefix trong môi trường sản xuất
};

export default nextConfig;

