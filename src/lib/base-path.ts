const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (!basePath) {
    return normalized;
  }

  if (normalized === basePath || normalized.startsWith(`${basePath}/`)) {
    return normalized;
  }

  if (normalized === "/") {
    return basePath;
  }

  return `${basePath}${normalized}`;
}
