# When someone types “Emmy Chepkwony” in Google Chrome

## What you want

You type **Emmy Chepkwony** in **Chrome** (address bar or Google search) and your **Netlify portfolio** shows up in suggestions or results.

## What is actually possible

| What you see in Chrome | Can we control it from the website? |
|------------------------|-------------------------------------|
| **Google search results** (blue links after you press Enter) | **Indirectly yes** — after Google **indexes** your site |
| **Dropdown suggestions** while you type | **No** — Google/Chrome decides; not editable by site owners |
| **“People also search for”** | **No** — automatic |
| **Instant guarantee** | **No** — new sites take days to weeks |

**Important:** There is **no setting** on Netlify or in your HTML to “register” your name in Chrome’s suggestion list. Google must **discover** your page, then **rank** it for that name. Your name is fairly unique, which helps.

The **search box inside your portfolio** (Ctrl+K) only searches **your own page**. It does **not** affect Google or Chrome.

---

## Do this in order (your checklist)

### Step 1 — Site must be live on the internet

- Deploy on Netlify (Drop or Git).
- Copy your real URL, e.g. `https://emmy-chepkwony.netlify.app`.
- Open that URL in Chrome on your phone or another device to confirm it works.

### Step 2 — Fix URLs in the project (then redeploy)

Replace **`YOUR-SITE`** everywhere with your real Netlify host (no `https://` in the middle of files — use full URLs where shown):

- `index.html`
- `robots.txt`
- `sitemap.xml`

Upload/deploy again.

### Step 3 — Google Search Console (required)

This is how you **ask Google to list your page**. Without this, Chrome often never shows a new site.

**Detailed walkthrough (use if you get stuck):** open **`SEARCH-CONSOLE-STEP-BY-STEP.md`** in this folder.

Short version:

1. Sign in: [search.google.com/search-console](https://search.google.com/search-console)
2. **Add property** → **URL prefix** → paste your full Netlify URL (`https://…netlify.app`).
3. **Verify** with **HTML tag** in `index.html` (see comment in the file) → redeploy → click Verify.
4. **URL inspection** → paste homepage URL → **Request indexing**.
5. **Sitemaps** → submit only: `sitemap.xml` (not the full URL).

Wait **2–14 days**, then search on Google (not only Chrome bar):

`Emmy Chepkwony`

Use an incognito window or add `&pws=0` if you want a neutral check.

### Step 4 — Link your portfolio from LinkedIn (strong signal)

On [linkedin.com/in/emmychepkwony](https://www.linkedin.com/in/emmychepkwony):

- **Contact info → Website** → your Netlify URL, **or**
- **Featured** → add link titled **Portfolio — Emmy Chepkwony**

Google trusts links from LinkedIn. This helps your portfolio appear when people search your **name**.

### Step 5 — Optional but powerful

- Add **Portfolio: [your URL]** on your CV PDF and email signature.
- In Netlify, set a readable site name (e.g. `emmy-chepkwony`).
- Later: buy a domain like `emmychepkwony.com` and set it as primary in Netlify.

---

## How to check if it worked

1. **Google search:** `site:your-site.netlify.app`  
   - If zero results → not indexed yet; repeat Search Console request.
2. **Name search:** `Emmy Chepkwony`  
   - Look for your Netlify link on page 1 (may be below LinkedIn).
3. **Chrome address bar:** type your name slowly.  
   - Suggestions may show **after** Google has indexed you; they can lag behind full search results.

---

## What we already built in the site (helps Google, not Chrome directly)

- Page title starts with **Emmy Chepkwony**
- Meta description with your name and role
- `robots.txt` + `sitemap.xml`
- Structured data (Person + Website) for Google

---

## If you send your live Netlify URL

Share the exact link (e.g. `https://something.netlify.app`) and the project files can be updated for you so Step 2 is done before the next deploy.
