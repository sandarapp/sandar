/** Full public base URL of the deployed site, without a trailing slash. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

/**
 * Absolute URL for links that leave the app and come back, such as Supabase
 * email redirects. In the browser we trust the current origin so preview
 * deployments keep working without a rebuild.
 */
export function absoluteUrl(path: string) {
  const origin = typeof window === "undefined" ? siteUrl : window.location.origin;
  return `${origin}${path}`;
}
