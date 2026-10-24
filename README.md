# Sandar

Public-facing Sandar website built with:

- `Next.js 16` (App Router, static export)
- `TypeScript`
- `Tailwind CSS v4`
- `Framer Motion`

This site is the public marketing site. It holds no accounts: members and
communities create accounts and log in on the Sandar web app (Sandar-App
`apps/web`), backed by the Sandar API. Admin or moderation dashboards are
intentionally excluded from this codebase.

## Features

- Responsive marketing pages:
  - `/`
  - `/how-it-works`
  - `/safety`
  - `/for-partners`
  - `/about`
- `/sign-in` - points to log in and create account on the Sandar web app
- `/sign-up` - redirects to create account on the Sandar web app
- Every "Create account" / "Log in" button links to the web app
- Bilingual interface toggle: `English / Indonesia`
- Sunset design tokens shared with the app (`src/design/tokens.ts`,
  `src/app/globals.css`)

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Optionally create `.env.local` (every variable is optional locally):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_MEMBER_APP_URL=http://localhost:3002
```

3. Start the development server:

```bash
npm run dev
```

4. Open:

```txt
http://localhost:3000
```

## Production checks

Run these before deployment:

```bash
npm run lint
npm run build
```

## Deploy to Cloudflare Workers

This project builds to a fully static site (`output: "export"` in
`next.config.ts`), so it needs no Node server at runtime. `npm run build`
writes `out/`, which `wrangler.jsonc` serves as Workers static assets.

Cloudflare Workers Builds builds straight from the Git repository, which may
stay private.

### Build configuration

```
Build command:    npm run build
Deploy command:   npx wrangler deploy
Root directory:   /
```

Everything else lives in `wrangler.jsonc`. Its `name` must match the Worker
name in the dashboard, or `wrangler deploy` will publish to a different Worker.

### Environment variables

Cloudflare keeps two separate sets, and this matters here:

- `Settings` -> `Build` -> **Build Variables and Secrets** - visible to the
  build command. *This is the one this project needs.*
- `Settings` -> `Variables & Secrets` - runtime bindings only. Per Cloudflare's
  docs, "Build variables will not be accessible at runtime", and the reverse
  holds too: the build never sees runtime variables.

Every variable below is read by `next build`, so all of them belong under
**Build Variables and Secrets**, as plain Variables rather than Secrets:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://hellosandar.com` |
| `NEXT_PUBLIC_MEMBER_APP_URL` | Sandar web app origin, e.g. `https://app.hellosandar.com` |
| `NODE_VERSION` | `22` (also pinned by `.node-version`) |

All values are `NEXT_PUBLIC_*`, inlined into the bundle and readable by anyone;
never put secrets here. When `NEXT_PUBLIC_MEMBER_APP_URL` is unset the site
degrades gracefully: "Create account" and "Log in" go to `/sign-in`, which says
the web app opens soon instead of linking somewhere dead. The app serves
`/register` and `/login`.

### Custom domain

Do not create the DNS record by hand; Cloudflare "will create a new DNS record
for you" and refuses a hostname that already has a CNAME record.

1. `Workers & Pages` -> the Worker -> `Settings` -> `Domains & Routes` ->
   `Add` -> `Custom Domain`.
2. Enter `hellosandar.com`, select **Add Custom Domain**. Repeat for
   `www.hellosandar.com`.
3. `SSL/TLS` -> `Overview`: use **Full (strict)**. *Flexible* causes a redirect
   loop.
4. `SSL/TLS` -> `Edge Certificates`: enable **Always Use HTTPS**.

### Static-export constraints

Anything requiring a server is unavailable, so keep in mind:

- No proxy/middleware, no Route Handlers that read the request, no Server Actions.
- Images bypass Next.js optimization (`images.unoptimized`).

## Notes

- The locale switcher is client-side and stored in `localStorage`; the stored
  choice is applied after hydration so static HTML always matches.
- `/communities` currently redirects to `/for-partners` to preserve older references while following the updated prototype structure.
