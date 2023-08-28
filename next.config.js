/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    servierComponentsExternalPackages: ['mongoose'],
  },
  images: {
    domains: ['occ-0-3933-116.1.nflxso.net'],
  },
}

module.exports = nextConfig


module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}