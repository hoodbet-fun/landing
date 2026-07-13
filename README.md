# hoodbet.fun landing

Marketing site for [hoodbet.fun](https://hoodbet.fun) — manifesto, roadmap, HoodBet branding.

## Dev

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
# deploy dist/ to hoodbet.fun
```

## Environment

Vite bakes `VITE_*` variables at **build time**. For production, `/.env.production` sets `https://app.hoodbet.fun` automatically.

| Variable | Development | Production |
|----------|-------------|------------|
| `VITE_APP_URL` | `http://localhost:5174` | `https://app.hoodbet.fun` |
| `VITE_GITHUB_URL` | `https://github.com/hoodbet-fun` | same |
| `VITE_GITBOOK_URL` | `https://hoodbet.gitbook.io/hoodbet-docs` | same |

On Vercel: set the same `VITE_*` vars for **Production**, then **Redeploy** (env changes do not affect past builds).
