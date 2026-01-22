# GreenAnaj — Static Website

This repository contains a single-page static website (HTML/CSS/JS) designed to promote GreenAnaj. It is optimized for a dark, earthy theme and is mobile responsive.

## Files added
- `index.html` — main single-page site
- `style.css` — styling (dark theme, earthy accents)
- `script.js` — small JS for nav toggle, smooth scroll and reveal effects
- `assets/` — folder for images, logo and favicon (create locally)

## How to customize
1. Replace placeholder assets:
   - `assets/logo-placeholder.svg` → your real logo (44×44 recommended)
   - `assets/hero-placeholder.jpg`, `assets/grains.jpg`, etc. → product imagery
   - `assets/favicon.png` → favicon
2. Update social links in `index.html` (Instagram, LinkedIn, mailto, WhatsApp).
3. Edit copy directly inside `index.html` to refine text and taglines.
4. Hook up contact form:
   - Replace the `form` action or integrate with a service (Formspree, Netlify forms, your backend).

## Deploy to GitHub Pages
1. Commit these files to a branch (e.g., `gh-pages` or `main`).
2. In your GitHub repo settings → Pages, select the branch and root folder (or `/docs` if you prefer).
3. Save — your site will be published at `https://<your-username>.github.io/<repo>/` (or username.github.io for user/organization pages).

## Accessibility & Performance notes
- Images are decorative examples — optimize images (WebP, properly sized) before publishing.
- Use meaningful alt text for all product images.
- The site is intentionally simple for easy future expansion (blog, shop, CMS).

## Suggestions for next improvements
- Add structured data / JSON-LD for businesses and products.
- Add a simple product collection page or a blog section (static markdown or lightweight SSG).
- Integrate a contact form service or a lightweight serverless function for messages.

If you want, I can:
- Provide ready-to-use asset placeholders sized correctly.
- Convert this to a Jekyll/Netlify-ready structure for blog/products.
- Create a GitHub Actions workflow to automatically deploy on push.
