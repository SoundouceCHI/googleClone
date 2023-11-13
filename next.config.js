/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ["www.google.fr"], 
  }
}

module.exports = nextConfig
