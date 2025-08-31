/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode is enabled by default for App Router since Next.js 13.5.1
  // Explicitly set for React 18 compatibility
  reactStrictMode: true,

  // Compiler optimizations for React property removal (helps with ref warnings)
  compiler: {
    // Remove React properties that might cause warnings in React 18
    reactRemoveProperties:
      process.env.NODE_ENV === "production"
        ? {
            properties: ["^data-test"],
          }
        : false,
  },

  // Experimental features
  experimental: {
    // Note: React Compiler is primarily designed for React 19+
    // Keeping it disabled for React 18 compatibility
    // reactCompiler: false,
  },
}

module.exports = nextConfig
