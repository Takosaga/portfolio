# Portfolio

Static HTML/CSS/JS portfolio. No build tools, no dependencies.

## Structure

- `index.html` — Home: hero, project cards (3), tech skills list
- `contact.html` — Contact page with mocked form (TODO: wire real email service)
- `projects/project{1,2,3}.html` — Individual project detail pages
- `css/styles.css` — All styles, CSS variables in `:root`
- `js/main.js` — Mobile nav toggle, smooth scroll, active nav highlighting
- `images/` — Home page images
- `projects/images/` — Project detail images

## Branches

- `main` — production
- `dev` — integration branch; feature branches merge here first
- Feature branches: `feat/*` (e.g. `feat/dashboard`)

## Editing

- No lint, no typecheck, no tests. Edit and preview directly in a browser.
- All pages share `css/styles.css` and `js/main.js` — changes affect the whole site.
- CSS uses BEM-like class names (`block__element--modifier`). Variables in `:root`.
- Images: use `loading="lazy"` on all `<img>` tags.

## Gitignored

- `docs/superpowers/plans/**/*` and `docs/superpowers/specs/**/*` — superpowers artifacts
