/** Full public base URL of the deployed site, without a trailing slash. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

/**
 * Accounts live in the Sandar API, not on this static site. Members and
 * communities register and sign in on the Sandar web app (Sandar-App
 * apps/web). When the URL is unset, links fall back to /sign-in, which
 * explains where accounts live instead of pointing at a dead link.
 */
export const memberAppUrl = (process.env.NEXT_PUBLIC_MEMBER_APP_URL || "").replace(/\/+$/, "") || null;

/** Absolute link into the web app, or null when it isn't configured. */
export function appUrl(path: "/register" | "/register?type=community" | "/login") {
  return memberAppUrl ? `${memberAppUrl}${path}` : null;
}

/** Where every "Create account" button goes. */
export const createAccountHref = appUrl("/register") ?? "/sign-in/";
export const logInHref = appUrl("/login") ?? "/sign-in/";
/** Opens registration with "Community" already chosen as the account type. */
export const registerCommunityHref = appUrl("/register?type=community") ?? "/sign-in/";

/** Public contact address shown on About and in the Privacy Notice. */
export const contactEmail = "hellosandar@zohomail.com";
