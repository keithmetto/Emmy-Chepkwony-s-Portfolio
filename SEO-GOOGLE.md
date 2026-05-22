# Get “Emmy Chepkwony” to show your Netlify portfolio on Google

> **Looking for Chrome address-bar suggestions?** Read **`GOOGLE-CHROME-VISIBILITY.md`** first. Chrome suggestions come from **Google’s index** — you cannot turn them on from the website alone. Search Console + indexing is the real path.

Google does **not** guarantee any site will appear for a name search. These steps make it **much more likely** over a few days to a few weeks.

## 1. Publish the site (Netlify)

Use Netlify Drop or Git deploy. Note your live URL, for example:

`https://emmy-chepkwony.netlify.app`

In **Site configuration → Domain management**, you can set the site name so the `*.netlify.app` address is readable.

## 2. Fix the placeholder URLs in this project

After you know the live URL, replace **`YOUR-SITE`** with your subdomain (no trailing path) in:

- `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image`, and the JSON-LD `url` / `image`
- `robots.txt` — `Sitemap:` line
- `sitemap.xml` — `<loc>`

Redeploy to Netlify so Google sees the correct links.

## 3. Google Search Console (most important)

1. Go to [Google Search Console](https://search.google.com/search-console).
2. **Add property** → choose **URL prefix** and paste your full Netlify URL.
3. Verify ownership (HTML file upload, DNS, or Netlify meta tag — follow Google’s steps).
4. Open **URL inspection**, paste your homepage URL, click **Request indexing**.
5. Under **Sitemaps**, submit: `https://your-site.netlify.app/sitemap.xml`

## 4. Link to the portfolio from profiles you control

Google trusts pages that other sites link to. Add the portfolio URL to:

- **LinkedIn** — Featured section or “Website” on your profile (`linkedin.com/in/emmychepkwony`)
- Email signature
- CV PDF (optional line: “Portfolio: …”)
- Any org bio pages you are allowed to update

Use the **same spelling**: **Emmy Chepkwony**.

## 5. Optional: custom domain

A domain like `emmychepkwony.com` (if available) can look more professional; point it in Netlify and set it as the **primary** domain, then update canonical/sitemap URLs again.

## 6. What to expect

| Timeline | What usually happens |
|----------|----------------------|
| 2–14 days | Google may index the homepage after Search Console request |
| Weeks–months | Ranking for your **full name** often improves if the name is uncommon and links exist |
| Ongoing | Update the site and redeploy; request indexing again after big changes |

You may still see LinkedIn, PDFs, or news results above your site — that is normal. The goal is for your portfolio to appear **on the first page** for `Emmy Chepkwony`, not necessarily in position #1.

## Already done in the site code

- Page title and description with your name
- `robots.txt` allowing crawlers
- `sitemap.xml` for Search Console
- Open Graph / Twitter cards (sharing + context)
- JSON-LD **Person** schema (helps Google understand who the page is about)
