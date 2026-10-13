# HairVerses – salon landing page (React + Vite)

Static site, no backend, no API keys. Deploys to GitHub Pages.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview
```

## Customize
- `src/data/siteConfig.js`: name, address, hours, phone, WhatsApp, socials, map coordinates, hero/about/CTA image URLs.
- `src/data/services.js`, `stylists.js`, `gallery.js`: editable arrays.
- Colours: CSS variables at the top of `src/index.css`.
- Everything marked *demo* is placeholder content. Nothing here is a real address, price, or staff member.

**WhatsApp:** set `whatsapp` to digits only with country code (e.g. `919876543210`). Until then the form shows a "not set up" state. The form never claims a confirmed booking and stores nothing in the browser.

**Images:** remote Unsplash URLs, so they depend on Unsplash staying available (broken ones fall back to a dark gradient). For production, put licensed or client photos in `public/img/` and reference them with `${import.meta.env.BASE_URL}img/name.jpg`.

**Map:** uses public OpenStreetMap tiles (fine for low traffic; see the OSM tile usage policy). Scroll-zoom is off to limit requests. For heavy traffic, swap the `TileLayer` URL for a hosted tile provider. If tiles fail, a notice points users to Get Directions.

## Deploy to GitHub Pages
1. Repo name must match `REPO` in `vite.config.js` (default `hairverses-salon`). Change it there if different. Use `''` for a user/org site (`username.github.io`) or custom domain.
2. Push:
```bash
git init && git add . && git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<you>/hairverses-salon.git
git push -u origin main
```
3. GitHub repo → Settings → Pages → Source: **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on each push to `main`. Watch the Actions tab; the site appears at `https://<you>.github.io/hairverses-salon/`.
5. Update later: edit, commit, push. It redeploys automatically.

Project site = `user.github.io/<repo>/` (needs the base path). User/org site = `user.github.io` from a repo named exactly that (base `/`).

## Pre-deployment checklist
- [ ] `REPO` matches the repo name
- [ ] Address, coordinates, hours, phone, WhatsApp replaced with verified data
- [ ] Demo stylists/prices replaced or removed
- [ ] Images licensed and loading
- [ ] Test at 320, 390, 768, 1024, 1440 px: no sideways scroll
- [ ] Keyboard-only pass: nav, booking form, gallery lightbox
- [ ] Booking inquiry opens the right WhatsApp chat
- [ ] `npm run build` passes; check the live URL after deploy
