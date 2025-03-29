import type { NextConfig } from "next";

const repoPath = 'aws-icon-finder';

const nextConfig: NextConfig = {
    output: 'export',
    assetPrefix: `/${repoPath}/`,
    basePath: `/${repoPath}`,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
