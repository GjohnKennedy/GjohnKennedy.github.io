# John Kennedy G — Senior Android Developer Portfolio

A static, dark-themed portfolio for **John Kennedy G**, a Senior Android Developer with 4+ years of experience building production mobile applications across fintech, trading, real estate, education, enterprise devices, BLE and IoT.

**Live website:** https://gjohnkennedy.github.io

**GitHub:** https://github.com/GjohnKennedy
**LinkedIn:** https://linkedin.com/in/john-kennedy-g/

## Technologies

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript
- No framework, no build step, no npm, no backend

## Features

- Responsive layout for desktop, tablet and mobile, with a hamburger menu on small screens
- Single-page navigation using section anchors (`#home`, `#about`, `#experience`, `#skills`, `#projects`, `#contact`)
- Experience timeline, skills by category, and an ownership-focused role section
- Filterable project grid with per-project case studies
- Fullscreen screenshot lightbox with keyboard, Escape and swipe support
- Dark theme by default with an optional light theme
- Lightweight scroll and hover animations that respect `prefers-reduced-motion`
- SEO metadata (Open Graph, Twitter, canonical URL, structured data), `robots.txt` and `sitemap.xml`

## Project categories

Fintech, Trading, Real Estate, Education, Consumer, Enterprise, Creative, BLE / IoT

## Repository structure

```text
index.html
css/style.css
js/script.js
assets/images/      <- project banners and screenshots
assets/icons/
assets/fonts/
favicon.ico
robots.txt
sitemap.xml
README.md
```

## Adding project images

1. Copy your banner and screenshot files into `assets/images/`.
2. Open `js/script.js` and find the `PROJECT_IMAGES` block near the top of the projects data.
3. Add the file names, for example:
   `cityplots:{banner:'cityplots-banner.webp', shots:['cityplots-1.webp','cityplots-2.webp']}`

## Deploying on GitHub Pages

1. Create a public repository named `GjohnKennedy.github.io`.
2. Upload every file and folder from this project to the repository root.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
4. After a minute or two the site is live at https://gjohnkennedy.github.io

## Run locally

Open `index.html` in a browser, or serve the folder with any static server (for example `python -m http.server`).
