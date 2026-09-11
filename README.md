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

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Add the same environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy.

After deployment, update Supabase:

- `Site URL`: `https://your-domain.com`
- `Redirect URL`: `https://your-domain.com/auth/callback`

If you also use `www`, add it too:

- `https://www.your-domain.com/auth/callback`

## Notes

- The locale switcher is client-side and stored in `localStorage`.
- `/communities` currently redirects to `/for-partners` to preserve older references while following the updated prototype structure.
