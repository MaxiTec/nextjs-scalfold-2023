/** @type {import('next').NextConfig} */
const path = require('path')
console.log(path.join(__dirname, 'styles'))
const nextConfig = {
  experimental: {
    appDir: false
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@use '@/styles/base/_vars.module.scss' as *;`
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spaceohrtest.sfo2.digitaloceanspaces.com'
      }
    ]
  }
}

module.exports = nextConfig
