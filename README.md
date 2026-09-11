# Sandar

Public-facing Sandar website built with:

- `Next.js 16` (App Router)
- `TypeScript`
- `Tailwind CSS v4`
- `Framer Motion`
- `Supabase Auth`

This build is focused only on the public website and member entry flow. Admin or moderation dashboards are intentionally excluded from this codebase.

## Features

- Responsive marketing pages:
  - `/`
  - `/how-it-works`
  - `/safety`
  - `/for-partners`
  - `/about`
- Auth flow:
  - `/sign-up`
  - `/sign-in`
  - `/verify-email`
  - `/auth/callback`
- Bilingual interface toggle: `English / Indonesia`
- Reusable back button on internal and auth pages
- Supabase email verification flow

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy the example env file:

```bash
cp .env.example .env.local
```

3. Fill in your Supabase credentials in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_xxxxxxxxxxxxxxxxx
```

Important:

- `NEXT_PUBLIC_SUPABASE_URL` must be the project root URL only.
- Do not use `/rest/v1` or `/auth/v1` in that URL.
- Use the `publishable key`, not the secret key.

4. In Supabase, configure Auth URL settings:

- `Site URL`: `http://localhost:3000`
- `Redirect URL`: `http://localhost:3000/auth/callback`

5. Start the development server:

```bash
npm run dev
```

6. Open:

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
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase publishable key |
| `NEXT_PUBLIC_SITE_URL` | `https://hellosandar.com` |
| `NODE_VERSION` | `22` (also pinned by `.node-version`) |

Both Supabase values are `NEXT_PUBLIC_*`, which means they are inlined into the
JavaScript bundle at build time and readable by anyone who opens the site. That
is by design: the publishable (anon) key is meant to be public and is guarded by
Row Level Security. Marking them as Secrets would only mask them in the build
log while still shipping them in the bundle. Never put the Supabase
`service_role` key in this repository.

If they are missing at build time the build still succeeds, but sign-in and
sign-up fail in the browser and metadata falls back to `http://localhost:3000`.

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

### Supabase settings after the first deploy

- `Site URL`: `https://hellosandar.com`
- `Redirect URL`: `https://hellosandar.com/auth/callback/`

The trailing slash matters, because the build uses `trailingSlash: true`.

### Static-export constraints

Anything requiring a server is unavailable, so keep in mind:

- No proxy/middleware, no Route Handlers that read the request, no Server Actions.
- The Supabase email callback is handled client-side in
  `src/app/auth/callback/page.tsx`.
- Images bypass Next.js optimization (`images.unoptimized`).

## Notes

- The locale switcher is client-side and stored in `localStorage`.
- `/communities` currently redirects to `/for-partners` to preserve older references while following the updated prototype structure.
