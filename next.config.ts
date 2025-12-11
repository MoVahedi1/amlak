import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  
  // تنظیمات نادیده گرفتن خطاها حذف شد تا بیلد امن‌تر باشد
  
  //禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
