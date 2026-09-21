# Avishkar1312.github.io

Source for [avishkar1312.github.io](https://avishkar1312.github.io) — a robotics portfolio site. Plain
HTML/CSS/JS, no build step, no dependencies beyond two Google Fonts loaded over a CDN link.

## Structure

```
index.html          the whole page
css/style.css        all styling
js/main.js            mobile nav toggle + a small scroll reveal (site works fine with JS off, too)
assets/
  img/                 project photos, compressed to web-sized JPEGs
  video/               project demo clips (click-to-play, nothing autoplays)
  Avishkar_Bahirwar_Resume.pdf
```

## Publish it (one-time)

This repo is already named `Avishkar1312.github.io`, which is what GitHub requires for a personal
"user site" — pushing to `main` here serves straight from the repo root, no extra configuration.

```bash
cd Avishkar1312.github.io
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/Avishkar1312/Avishkar1312.github.io.git
git push -u origin main
```

Then on GitHub: **Settings → Pages** → under "Build and deployment", set **Source** to
"Deploy from a branch", branch **main**, folder **/(root)**. Save. The site is live at
`https://avishkar1312.github.io` within a minute or two — GitHub emails you when it's published.

If the repo doesn't exist on GitHub yet, create it first at github.com/new, named exactly
`Avishkar1312.github.io` (the name is what makes it a user site instead of a project site), then run
the commands above.

## Updating later

Edit the files, then:

```bash
git add .
git commit -m "describe the change"
git push
```

GitHub Pages rebuilds automatically on every push to `main`, usually live within a minute.

## Editing the content

- **Text** — everything is in `index.html`, in plain sight, organized by `<section id="...">`
  (`about`, `experience`, `projects`, `recognition`, `toolbox`, `contact`).
- **A new project card** — copy one `<article class="project">…</article>` block inside
  `.project-grid` in `index.html`, swap the media and text, and drop the asset in `assets/img/` or
  `assets/video/`.
- **Colors / fonts** — the top of `css/style.css` has a `:root { … }` block with every color as a
  named variable (`--accent`, `--paper`, `--ink`, etc.) — change values there rather than hunting
  through the file.
- **Resume** — replace `assets/Avishkar_Bahirwar_Resume.pdf` with a new file of the same name, or
  update the filename in the two `href="assets/…pdf"` spots in `index.html` (sidebar button + About
  section link).

## Notes

- No dark/light theme switch — the page commits to one look on purpose (dark sidebar, warm-light
  content), so it doesn't need to.
- Videos use `preload="metadata"` and never autoplay, so the page stays fast to load even though a
  few clips run 15–30&nbsp;MB — nothing downloads until you press play.
- Total repo size is ~80&nbsp;MB (mostly the four demo videos), comfortably under GitHub's 100&nbsp;MB
  per-file limit.

