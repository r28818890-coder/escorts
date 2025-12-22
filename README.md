## Business Nesta — India Presence Microsite

Interactive Vite + React landing page that visualizes Business Nesta’s pan-India customer footprint with a live-animated map, modern UI, and motion-enhanced storytelling blocks.

### Tech Stack
- React 19 + TypeScript
- Vite build tooling
- Tailwind (CDN) + custom utility CSS
- Framer Motion + D3 for animations and geo rendering

---

## 1. Getting Started Locally

| Step | Command | Notes |
|------|---------|-------|
| Install dependencies | `npm install` | Requires Node 18+ |
| Start dev server | `npm run dev` | Vite will prompt for the local URL |
| Type-check/build | `npm run build` | Outputs to `dist/` |
| Preview production build | `npm run preview` | Serves files from `dist/` |

Environment variables: duplicate `.env.local.example` (or `.env.local` if present) and provide any keys you need. The current build does not require mandatory secrets.

---

## 2. Render Deployment Guide

This project is optimized for a **Render Static Site** (no server) deployment.

| Setting | Value |
|---------|-------|
| Root Directory | `.` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

1. Push your code to a GitHub repo.
2. In Render → “New +” → “Static Site”.
3. Connect the repo, keep “Branch” as main, and fill the settings above.
4. Click “Create Static Site”. Render will install dependencies, run the build, and serve the contents of `dist/`.
5. For subsequent deployments, just push to the tracked branch—Render redeploys automatically.

If you switch to a **Render Web Service** instead, use:
- Root: `.`
- Build Command: `npm install && npm run build`
- Start Command: `npm run preview -- --host 0.0.0.0 --port $PORT`

---

## 3. Project Structure

```
map/
├─ App.tsx                # Composition of layout sections
├─ components/            # Hero, Stats, Map, GuideTabs, etc.
├─ index.html             # Tailwind CDN + root element
├─ index.tsx              # React entry point
├─ index.css              # Global utility styles
├─ package.json
└─ vite.config.ts
```

---

## 4. Troubleshooting

- `npm run build` fails: ensure Node ≥ 18 and remove any stale `node_modules`.
- Map not loading: verify you have internet access to fetch the GeoJSON (`https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson`).
- Tailwind classes missing: the project uses the CDN build defined inside `index.html`, so keep that script intact.

Happy deploying! 🚀
