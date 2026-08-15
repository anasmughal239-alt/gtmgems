import type { NextConfig } from "next";

// `output: "standalone"` is for self-hosted/Docker deployments and is
// incompatible with Vercel's own build pipeline (Vercel does its own
// serverless bundling and expects the default .next output) — it was
// causing `ENOENT: .next/next-server.js.nft.json` on every Vercel deploy.
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
