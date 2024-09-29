// import nextBundleAnalyzer from "@next/bundle-analyzer"
// import withPlugins from "next-compose-plugins"
import createNextIntlPlugin from "next-intl/plugin"

// const withBundleAnalyzer = nextBundleAnalyzer({
//   enabled: true,
//   openAnalyzer: true,
// })

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js")

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
    reactCompiler: {
      compilationMode: "annotation",
    },
  },
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  // Already doing linting and typechecking as separate tasks in CI
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

const withNextIntl = createNextIntlPlugin()

// export default withPlugins([
//   [withBundleAnalyzer],
//   withNextIntl,
//   // your other plugins here
// ])

export default withNextIntl(nextConfig)
