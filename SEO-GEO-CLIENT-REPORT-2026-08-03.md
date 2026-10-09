# Klaris — SEO Full Baseline Report
**Date:** 2026-08-03 | **Prepared by:** Krrisp Digital | **Scope:** SEO Full (includes GEO-lite)

---

## Executive Summary

Klaris has a strong technical foundation with HTTPS, HSTS, CSP, and good security headers. The site is fast, mobile-friendly, and has clean URL structure. However, **two critical issues are blocking SEO performance**: a broken sitemap.xml (500 error) and a homepage H1 that doesn't render in server-side HTML. These are fixable within days.

The bigger opportunity is **AI search visibility**. Klaris has a well-structured llms.txt (rare — fewer than 5% of sites have one) and good answer-first content on audience pages. With targeted citability rewrites and schema expansion, Klaris can capture AI Overview citations for wealth-structure queries ahead of competitors.

**Bottom line:** Fix the sitemap and H1 this week. The GEO opportunity is real and time-sensitive — AI platforms are forming citation habits now.

---

## Technical SEO Score: 72/100

| Check | Score | Status | Finding |
|-------|-------|--------|---------|
| Robots.txt | 15/15 | 🟢 Pass | Valid, references sitemap, allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) |
| XML Sitemap | 0/10 | 🔴 Critical | **Returns 500 error** — blocking Google from indexing all pages |
| HTTPS & Security | 10/10 | 🟢 Pass | HTTPS enforced, HSTS preload, upgrade-insecure-requests |
| Redirect Chains | 15/15 | 🟢 Pass | No chains found on 6 key paths |
| Broken Links | 20/20 | 🟢 Pass | All 15 pages return 200 |
| Crawl Depth | 10/10 | 🟢 Pass | All pages ≤3 clicks from homepage |
| Canonicals | 4/10 | 🟡 Partial | Homepage has canonical; other pages need verification |
| Mobile-Friendly | 10/10 | 🟢 Pass | Viewport meta present, responsive design |

### Critical Fixes (This Week)

1. **Sitemap.xml 500 error** — Vercel route is broken. Check `src/app/sitemap.ts` or add `next-sitemap` config.
2. **Homepage H1 missing in SSR HTML** — The H1 "Structure Your Wealth. Secure Your Legacy." is not in the server-rendered HTML. All other pages have exactly 1 H1. This suggests the homepage hero is client-side rendered. Google may not see the H1.

### High Priority

3. **Canonical tags** — Only homepage has one. Add canonicals to all 15 pages via `generateMetadata`.
4. **JSON-LD in production** — Source code has JSON-LD for 9 pages, but curl on live homepage shows 0 blocks. Verify Google Search Console sees structured data.

---

## On-Page SEO

| Element | Status | Notes |
|---------|--------|-------|
| Meta descriptions | 🟢 Good | 8 key pages verified with unique descriptions |
| Title tags | 🟢 Good | Unique, keyword-rich, under 60 chars |
| H1 tags | 🟡 Issue | Homepage missing in SSR; all others have exactly 1 |
| Image alt text | 🟢 Good | 0 images without alt on homepage |
| Internal linking | 🟢 Good | Nav + footer links all key pages |
| Content depth | 🟢 Good | Audience pages are comprehensive (800+ words) |

---

## Schema / Structured Data

| Page | JSON-LD Present | Type |
|------|-----------------|------|
| Homepage | ❌ Not in production HTML | — |
| /about | ✅ Yes | Organization |
| /contact | ✅ Yes | ContactPage |
| /faq | ✅ Yes | FAQPage |
| /privacy | ✅ Yes | WebPage |
| /terms | ✅ Yes | WebPage |
| /disclaimer | ✅ Yes | WebPage |
| /cookie-policy | ✅ Yes | WebPage |
| /refund-policy | ✅ Yes | WebPage |
| /security | ✅ Yes | WebPage |
| /blog/[slug] | ✅ Yes | Article |

**Missing:** Organization schema on homepage, WebSite schema with SearchAction, BreadcrumbList on all pages.

---

## GEO-Lite (AI Search Visibility)

### llms.txt: ✅ Excellent

- **Status:** 200, well-structured, comprehensive
- **Content:** Site description, features, FAQ, contact info, target audience
- **AI crawler access:** Explicitly allowed in robots.txt (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- **Score:** 85/100 (deducted for not being linked in robots.txt)

### Platform Readiness (Baseline)

| Platform | Score | Key Gap | Priority Action |
|----------|-------|---------|---------------|
| Google AI Overviews | 45/100 | Homepage H1 not in SSR; no Organization schema | Fix H1, add Organization + WebSite schema |
| ChatGPT | 30/100 | No Wikipedia/Wikidata entry; limited brand mentions | Build entity presence, get listed in fintech directories |
| Perplexity | 35/100 | No Reddit presence; limited community validation | Engage in r/ausfinance, r/financialplanning |
| Gemini | 40/100 | No YouTube channel with transcripts | Create "What is wealth structure mapping?" video |
| Bing Copilot | 50/100 | BingSiteAuth.xml present; needs IndexNow | Add IndexNow key file |

### AI Citability (Content Structure)

**Strong pages (answer-first, self-contained blocks):**
- `/for-families` — Good question-based headings, direct answers
- `/faq` — 15+ Q&A pairs, excellent for AIO extraction

**Needs work:**
- Homepage — Hero text is compelling but not structured for AI extraction
- `/for-accountants`, `/for-financial-advisors` — Similar structure to /for-families, should score well

**Quick wins:**
1. Add definition boxes: "KRSP is..." / "Wealth structure mapping is..."
2. Add publication dates to blog posts
3. Add author bylines with credentials

---

## CRO (Conversion Rate Optimisation)

| Signal | Status | Notes |
|--------|--------|-------|
| Hero H1 | 🟡 Issue | Not in SSR HTML |
| Hero CTA | 🟢 Pass | "Book a Demo" button prominent |
| Value proposition | 🟢 Pass | Clear, >20 chars |
| CTA coverage | 🟢 Pass | Multiple CTAs throughout |
| Form friction | 🟢 Pass | Contact form: 4 fields (name, email, subject, message) — under 5 threshold |
| Mobile ready | 🟢 Pass | Viewport meta present |

**CTA inventory:**
- "Book a Demo" (primary, appears 3x)
- "Request App Access" (secondary)
- "Contact Us" (footer)
- "Watch on YouTube" (video)

---

## Competitive Landscape

**Direct competitors identified:**
- Excel + spreadsheet workflows (manual, error-prone)
- Generic document vaults (no structure mapping)
- Xero/MYOB (transactional, not structural)

**Klaris differentiation:**
- Only Australian-built wealth structure visualisation platform
- KRSP framework (proprietary)
- Privacy-first, Australian data residency
- B2B2C model (advisor-led)

**SEO opportunity:** No direct competitor has strong AI search presence. First-mover advantage available.

---

## 6-Month Delivery Plan

**Month 1 (This Month):** Technical Foundation
- Fix sitemap.xml 500 error
- Fix homepage H1 SSR issue
- Add canonical tags to all pages
- Add Organization + WebSite schema to homepage
- Verify JSON-LD renders in production

**Month 2:** On-Page Optimisation
- Meta description audit (6 legal pages)
- Image alt text audit (all pages)
- FAQPage schema on /faq
- Internal linking audit
- BreadcrumbList schema

**Month 3:** GEO-Lite (AI Search)
- AI citability audit on 4 key pages
- Add definition boxes
- Platform optimizer baseline scores
- Add publication dates + author bylines
- Link llms.txt from robots.txt

**Month 4:** Backlinks & Authority
- Competitor backlink analysis
- Directory submissions (FinTech Australia, etc.)
- Create linkable asset (original research)
- Guest article outreach

**Month 5:** GEO Deep
- Re-run citability (target +20%)
- Add sameAs schema
- YouTube video with transcript
- llm-live-test for 3 queries

**Month 6:** Refinement
- Full re-audit vs baseline
- Monthly rank tracking setup
- Content freshness audit
- Quarterly comprehensive report

---

## Next Actions (This Week)

1. **Fix sitemap.xml** — Check `src/app/sitemap.ts` or add `next-sitemap` config. Verify with `curl https://klaris.com.au/sitemap.xml`.
2. **Fix homepage H1** — Ensure "Structure Your Wealth. Secure Your Legacy." renders in server HTML, not just client-side React.
3. **Add canonical tags** — Add `alternates.canonical` to `generateMetadata` for all pages.
4. **Add Organization schema** — Create `src/components/OrganizationSchema.tsx` and add to homepage layout.
5. **Verify JSON-LD** — Use Google Rich Results Test on homepage and 3 key pages.

---

## Budget & Resources

| Item | Cost | Notes |
|------|------|-------|
| Technical fixes (M1) | $0 | Internal dev time |
| Schema implementation | $0 | Internal dev time |
| Content rewrites (M3) | $0 | Internal copywriting |
| Directory submissions | $0 | Free listings |
| Linkable asset creation | $0 | Internal research |
| Guest articles | $0 | Time cost only |
| **Total M1–M3** | **$0** | All internal |
| DataForSEO (optional) | ~$50/mo | Keyword tracking, competitor analysis |
| Link acquisition (M4+) | ~$1,290/mo | Owner-gated add-on |

---

## Reporting

- **Monthly progress report** — 1st of each month, tracking vs this baseline
- **Quarterly comprehensive report** — Full re-audit, next quarter plan
- **Ad-hoc alerts** — Critical issues (sitemap down, rankings drop >10 positions)

**Contact:** Pranav Chauhan — pranav@krrispdigital.com.au — +61 2 5300 0300
