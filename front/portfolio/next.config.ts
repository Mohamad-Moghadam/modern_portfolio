import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",  // ← don't forget this one!
    images: {
        remotePatterns: [
            // your laptop (development)
            { protocol: "http", hostname: "localhost", port: "8000", pathname: "/media/**" },
            { protocol: "http", hostname: "127.0.0.1", port: "8000", pathname: "/media/**" },
            // your server (production)
            { protocol: "https", hostname: "msoodmandm.de", pathname: "/media/**" },
            { protocol: "https", hostname: "www.msoodmandm.de", pathname: "/media/**" },
        ],
    },
};

export default nextConfig;