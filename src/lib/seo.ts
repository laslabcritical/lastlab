export const DEFAULT_SITE_URL = "https://lastlab.org";

export function getSiteUrl(): URL {
  const configured = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

  try {
    return new URL(configured);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}
