# FirmGround — Landing Page

A static landing page for FirmGround. Plain HTML, CSS, and a small bit of
JavaScript — no build step, no dependencies. Open `index.html` in a browser
and it works.

## Project structure

```
index.html        All the page content (markup), section by section.
css/styles.css    All styling. Colors/spacing/fonts live in variables at the top.
js/main.js         The one interactive piece: the "Three Steps" role tabs.
assets/            Product screenshots and the founder avatar.
_source/           The original Cloud Design export this was built from (reference only — safe to delete).
```

## How to view it

Because the page loads the CSS, JS, and images by relative path, open it
through a local web server rather than double-clicking the file. From this
folder:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Making edits

- **Text and content** → `index.html`. Each section is marked with a comment
  banner (MASTHEAD, HERO, FOUNDER STORY, THREE STEPS, PRICING, FOOTER).
- **Colors** → the `:root` block at the top of `css/styles.css`. Change
  `--accent` and `--accent-deep` to re-tint the whole site; the ink/grey text
  tones and surfaces are variables there too.
- **The tabs** ("For founders" / "For sales executives") → the markup is two
  `.steps__panel` blocks in `index.html`; the show/hide logic is in
  `js/main.js`.

Colors use the [OKLCH](https://oklch.com) format — `oklch(Lightness Chroma Hue)`.
Lower lightness is darker; higher chroma is more vivid.

## Fonts

Loaded from Google Fonts (Spectral, Libre Franklin, JetBrains Mono) via a
`<link>` in `index.html`. An internet connection is needed for the fonts to
render as designed; without one, the browser falls back to system fonts.
