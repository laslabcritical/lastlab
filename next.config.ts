import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [
  "laslabcritical",
  "lastlab"
];
const basePath = isGitHubActions ? `/${repository}` : "";
const defaultSiteUrl = isGitHubActions
  ? `https://${owner}.github.io`
  : "https://lastlab.org";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
