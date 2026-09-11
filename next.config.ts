import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static build into `out/`. No Node server at runtime.
  output: "export",
  // Emits `/about/index.html` instead of `/about.html`, which every static host
  // resolves the same way.
  trailingSlash: true,
  images: {
    // The default loader needs a server; static export has none.
    unoptimized: true,
  },
};

export default nextConfig;
