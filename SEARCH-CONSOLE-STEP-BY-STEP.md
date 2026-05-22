# Google Search Console — step by step (Netlify portfolio)

Use this guide if Search Console feels confusing. Work through **Part A → B → C** in order. Do not skip Part A.

---

## Part A — Before Search Console (fix these first)

### A1. Your site must be live

Open your Netlify link in Chrome, for example:

`https://something.netlify.app`

You must see your portfolio (photo, colours, sections). If not, deploy on Netlify first (Drop or Git).

### A2. Copy your exact URL

From the browser address bar, copy everything **without** a page name at the end:

| Correct | Wrong |
|---------|--------|
| `https://emmy-chepkwony.netlify.app` | `https://emmy-chepkwony.netlify.app/index.html` |
| `https://emmy-chepkwony.netlify.app/` | `http://emmy-chepkwony.netlify.app` (use **https**) |

Write it down. Example: **`https://YOUR-NAME.netlify.app`**

### A3. Fix `YOUR-SITE` in your project (critical)

Your `sitemap.xml` and `robots.txt` still say **`YOUR-SITE`**. Google will **reject** the sitemap until this is fixed.

In these 3 files, replace **`YOUR-SITE`** with **only** your Netlify name (the part before `.netlify.app`):

| File | Example after fix |
|------|-------------------|
| `sitemap.xml` | `https://emmy-chepkwony.netlify.app/` |
| `robots.txt` | `Sitemap: https://emmy-chepkwony.netlify.app/sitemap.xml` |
| `index.html` | all `https://YOUR-SITE.netlify.app` → your real URL |

Then **upload / deploy again** to Netlify.

### A4. Test the sitemap in the browser

Open:

`https://YOUR-NAME.netlify.app/sitemap.xml`

You should see XML with your real URL inside `<loc>`, **not** `YOUR-SITE`.

Also test:

`https://YOUR-NAME.netlify.app/robots.txt`

---

## Part B — Add the site in Search Console

### B1. Open Search Console

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with a **Google account you will keep** (Gmail).

### B2. Add a property (important choice)

1. Click **Add property** (or the property dropdown → **+ Add property**).
2. Choose **URL prefix** (right side) — **not** “Domain” unless you own a custom domain and know DNS.
3. Paste your **exact** homepage URL, e.g. `https://emmy-chepkwony.netlify.app`
4. Click **Continue**.

You are now on the **Verify ownership** screen.

---

## Part C — Verify ownership (easiest method for Netlify)

Google must confirm you control the site. **HTML tag** is usually easiest.

### Method 1 — HTML tag (recommended)

1. On the verification screen, choose **HTML tag**.
2. Google shows something like:

   ```html
   <meta name="google-site-verification" content="AbCdEf123456..." />
   ```

3. Copy **only** the `content="..."` value, or the whole line.
4. Open **`index.html`** in your project. Find this line near the top of `<head>`:

   ```html
   <!-- <meta name="google-site-verification" content="PASTE_GOOGLE_CODE_HERE" /> -->
   ```

5. **Remove** the `<!--` and `-->` so it becomes a real tag, and paste your code:

   ```html
   <meta name="google-site-verification" content="AbCdEf123456..." />
   ```

6. Save → **deploy to Netlify again**.
7. In Chrome, open your live site → right‑click → **View page source** → search for `google-site-verification` — the tag must appear (not commented out).
8. Back in Search Console, click **Verify**.

**If verification fails:** wait 2–5 minutes after deploy, refresh Netlify deploy is “Published”, try **Verify** again.

### Method 2 — HTML file upload

1. Choose **HTML file** on the verification screen.
2. Google gives a file name like `google1234567890abcdef.html`.
3. Create that **exact file** in your portfolio folder (same level as `index.html`) with **only** the one line Google specifies inside it.
4. Deploy to Netlify.
5. Open `https://YOUR-NAME.netlify.app/google1234567890abcdef.html` — it must load (not 404).
6. Click **Verify** in Search Console.

### Method 3 — DNS (only if you use a custom domain)

Use only if you bought a domain (e.g. `emmychepkwony.com`) and connected it in Netlify. Add the TXT record Netlify/Google shows at your domain registrar.

---

## Part D — Request indexing (homepage)

After verification succeeds:

1. In the left menu, click **URL inspection** (or the search bar at the top).
2. Paste your homepage URL: `https://YOUR-NAME.netlify.app/`
3. Press Enter. Wait for Google to test the URL.
4. If you see **“URL is not on Google”**, click **Request indexing**.
5. Status may show **“Indexing requested”** — that is normal. It is not instant.

You can request indexing again after big site updates (not every day).

---

## Part E — Submit the sitemap

1. Left menu → **Sitemaps**.
2. Under **Add a new sitemap**, type only: `sitemap.xml`
3. Click **Submit**.

Do **not** paste the full `https://...` URL in that box — only `sitemap.xml`.

### Sitemap errors and fixes

| Error | Fix |
|-------|-----|
| **Couldn’t fetch** | Site not public, wrong deploy, or `sitemap.xml` missing on Netlify. Open the sitemap URL in the browser. |
| **General HTTP error** | Redeploy; check Netlify site is not password-protected. |
| **Invalid URL in sitemap** | You still have `YOUR-SITE` in `sitemap.xml` — fix Part A3 and redeploy. |
| **Pending** | Wait 24–48 hours. |

---

## Part F — Check if it worked

After a few days:

1. Search on Google: `site:your-name.netlify.app`  
   - Any result = Google knows your site.
2. Search: `Emmy Chepkwony`  
   - Your portfolio may appear below LinkedIn.

Chrome address-bar suggestions can take **longer** than Google search results.

---

## Still stuck? Note these and ask for help

1. Your **exact Netlify URL**
2. Which step fails: **Verify**, **URL inspection**, or **Sitemap**
3. The **exact error message** (screenshot text)
4. Does `https://YOUR-NAME.netlify.app/sitemap.xml` open correctly in the browser?

If you send your Netlify URL in chat, the `YOUR-SITE` placeholders in the project files can be updated for you.
