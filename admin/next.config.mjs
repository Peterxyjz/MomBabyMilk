/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    env: {

     API_PROD_URL: "http://localhost:5000/api/",
  
    },
    redirects: async () => {
      return [
        {
          source: "/",
          destination: "/login",
          permanent: true,
        },
        // {
        //   source: "/en",
        //   destination: "/en/backend/login",
        //   permanent: true,
        // },
      ];
    },
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
        },
        {
          protocol: "http",
          hostname: "127.0.0.1:8000",
        },
        {
          protocol: "https",
          hostname: "fastkart-admin-json.vercel.app",
        },
        {
          protocol: "https",
          hostname: "laravel.pixelstrap.net",
        },
      ],
    },
    devIndicators: {
      buildActivity: false,
    },
  };
  
export default nextConfig;
