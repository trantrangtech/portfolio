/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Required for static HTML export
    // basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    images: {
        unoptimized: true, // Required for static export
    },
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '', 
    publicRuntimeConfig:{
        basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
      },
};
// console.log(process.env.NODE_ENV);
export default nextConfig;

