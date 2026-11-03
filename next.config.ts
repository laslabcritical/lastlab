import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const [owner, repository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [
  "laslabcritical",
  "lastlab"
];
// GitHub Pages provides an empty base path when a custom domain is configured.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGitHubActions ? `/${repository}` : "");
const defaultSiteUrl = `https://${owner}.github.io`;

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

