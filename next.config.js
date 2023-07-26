/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")({ extension: /\.md?$/ });
module.exports = withMDX(nextConfig);
