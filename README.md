# Emmy Chepkwony — Portfolio

A single-page portfolio site reflecting the March 2026 CV: emergency health and nutrition programme leadership in Kenya (ASAL), Action Against Hunger, IRC ComPAS, and integrated Nutrition–WASH–Health–FSL work.

## View locally (read this if preview is blank)

**Recommended — double-click `OPEN-PREVIEW.cmd`** in this folder. It starts a tiny local web server and should open your browser to `http://127.0.0.1:8088/index.html`. That avoids OneDrive / `file://` issues and matches how the site runs when hosted online.

Requirements: **Python 3** on your PATH (the Windows installer option “Add python.exe to PATH”). The script uses `py -3`.

**No Python?** Double-click `index.html` instead. If the page looks unstyled (plain text), your browser blocked local CSS — use `OPEN-PREVIEW.cmd` after installing Python, or run `npx --yes serve .` from this folder in Command Prompt.

**Cursor Simple Browser:** Command Palette → “Simple Browser: Show” → paste your machine’s file URL, e.g.  
`file:///C:/Users/ADMIN/OneDrive/Desktop/PROJECTS/EMMY%27S%20PORTFOLIO/index.html`  
(change the path if your drive or folder name differs).

## Files

- `OPEN-PREVIEW.cmd` + `preview_server.py` — local preview in the browser
- `index.html` — structure and content
- `styles.css` — layout and theme (humanitarian / health palette, portrait hero)
- `script.js` — mobile navigation and footer year
- `assets/emmy-portrait.png` — hero photo (replace this file to update the image)
- `Emmy C.V March 2026.pdf` — linked for **Download CV** (keep the same filename or update links in `index.html`)
- `netlify.toml` — Netlify publish settings (root = site root)
- **Site search** — header **Search** button or **Ctrl+K** (⌘+K on Mac); indexes profile, experience, impact, and skills on the page

## Publish on Netlify

This site is **static** (HTML, CSS, JS, images, PDF). There is **no build command**. `netlify.toml` sets **`publish = "."`** so Netlify serves the folder that contains `index.html`.

### Option A — Git + Netlify (recommended)

1. **Create a Git repository** for this folder and push it to GitHub (or GitLab / Bitbucket). Include everything the live site needs:
   - `index.html`, `styles.css`, `script.js`, `netlify.toml`
   - `assets/emmy-portrait.png`
   - `Emmy C.V March 2026.pdf` (required for **Download CV** links)
2. Sign in at [app.netlify.com](https://app.netlify.com/).
3. **Add new site** → **Import an existing project** → connect your Git provider and pick the repo.
4. Netlify should pick up `netlify.toml`. If the UI asks for settings manually:
   - **Build command:** leave **empty**
   - **Publish directory:** **`.`** (dot only)
5. Click **Deploy site**. After the first deploy, every `git push` to the linked branch can auto-deploy if you leave **Continuous deployment** on.

**Tip:** Linux hosts (including Netlify) treat file names as **case-sensitive**. Keep PDF and image names exactly as referenced in `index.html`.

**Tip:** A GitHub repo name without special characters (for example `emmy-portfolio`) avoids odd URLs; your local folder can still be `EMMY'S PORTFOLIO`.

### Option B — Deploy without Git (drag-and-drop)

1. Zip this folder (with `index.html` at the **root** of the zip, not nested inside another folder), or use [Netlify Drop](https://app.netlify.com/drop) and drag the folder.
2. You get a random `*.netlify.app` URL. **Drag-and-drop does not auto-update** when you change files; use Git (Option A) for ongoing updates.

### Option C — Netlify CLI

From this folder (in a terminal that works on your machine):

```bash
npx netlify-cli login
npx netlify-cli init
npx netlify-cli deploy --prod --dir=.
```

Follow the prompts to link the folder to a site. Use **`--dir=.`** so the published root matches your project root.

### After deploy

- Under **Site configuration → Domain management**, you can add a **custom domain** and enable HTTPS (Netlify handles certificates).
- Open the live URL and test **Download CV**, **LinkedIn**, and that the **portrait** loads (`assets/emmy-portrait.png`).

## Notes

- Referee contact details are intentionally summarized (“on request”) for a public web presence; add them back if you publish a private link or PDF only.
- Update copy anytime your roles or metrics change.
