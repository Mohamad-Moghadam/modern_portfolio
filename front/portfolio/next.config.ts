import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            { protocol: "http", hostname: "localhost", port: "8000", pathname: "/media/**" },
            { protocol: "http", hostname: "127.0.0.1", port: "8000", pathname: "/media/**" },
            { protocol: "https", hostname: "msoodmandm.de", pathname: "/media/**" },
            { protocol: "http", hostname: "185.194.141.126", pathname: "/media/**" },
        ],
    },
};

export default nextConfig;
