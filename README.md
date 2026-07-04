# The Honey Lab

Static multi-page site for a small-batch California honey company.

## Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Basecamp — explore all areas of the business |
| About | `/about.html` | Family story (placeholders for owner content) |
| Honey | `/honey.html` | Individuality + batch catalog |
| Process | `/process.html` | In-depth bloom-to-jar process |
| Contact | `/contact.html` | Form, shop embed, email signup |

## Run locally

```bash
npm install
npm run dev
```

## Style picker (dev)

A floating **Styles (dev)** control appears on every page. Use it to compare five looks:

| Style | Intent |
|-------|--------|
| **Paper** | Current default — kitchen-table kraft, notebook feel |
| **Field Notes** | Batch logbook — documentary, mono labels, square edges |
| **Coastal** | Morning light — airy San Diego calm, soft and open |
| **Hearth** | Evening table — dark, intimate, personal |
| **Market** | Farmers-market stand — friendly, product-first |

Choice is stored in `localStorage` and carries across pages. Remove `js/theme-picker.js` and `css/themes.css` (or keep only the chosen theme tokens) before a final production launch if you do not want the picker live.

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/` — CSS, JS, and HTML together.

## Deploy to GitHub Pages

1. Push to `main` (includes `.github/workflows/deploy-pages.yml`).
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. After the workflow runs, the site is at `https://<username>.github.io/TheHoneyLab/`.

The workflow runs `npm run build` and publishes `dist/`. Do not point Pages at the repo root — source HTML references `css/styles.css`, which only exists in `dist/` after a build.

Asset paths are relative so the site works on GitHub Pages subpaths and on a custom domain at the root.

Upload everything inside `dist/` to your web root.

## Store integration

E-commerce embeds into `#store` on the contact page.

Product data lives in `public/js/products.js`.
