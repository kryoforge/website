/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    agentUpgrade: "security",
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/#capabilities",
        permanent: false,
      },
      {
        source: "/capabilities",
        destination: "/#capabilities",
        permanent: false,
      },
      {
        source: "/methodology",
        destination: "/#methodology",
        permanent: false,
      },
      {
        source: "/pricing",
        destination: "/#pricing",
        permanent: false,
      },
      {
        source: "/faq",
        destination: "/#faq",
        permanent: false,
      },
      {
        source: "/research-portfolio",
        destination: "/#portfolio",
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
