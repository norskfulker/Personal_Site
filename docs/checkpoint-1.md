# Checkpoint 1: site vs. Part 1

The site is currently **one page** with sections (no separate pages). Status: draft, local only, not published.

## 1. Mismatch list (audit before any change)

| # | Where | What the site said | What Part 1 says | Rule |
|---|---|---|---|---|
| M1 | Browser title / meta description | "Srikanta Magaji \| Independent Advisor"; fintech/systems description | SEO title and description as given | Allowed (keep SEO in sync) |
| M2 | Hero H1 | "Clear Systems, Confident Decisions" | Tagline "Market it. Advise it. Audit it." | Ask first (tagline) |
| M3 | Hero subline, About, Zoom reel, footer blurb | Fintech, banking, "systems that endure" positioning; "founders, boards and institutions that move money" | Pitch: performance marketing, advisory for startups and government, software and audit consulting | Allowed (tighten wording) where it only restates the pitch |
| M4 | Every CTA (nav, hero, sections, contact) | "Book a Consultation" | Goal: book a **free 15-minute call** | Ask first (CTA) |
| M5 | Services section | 5 services: Systems Strategy, Fintech & Payments Advisory, Technical Due Diligence, Fractional CTO & Leadership, Platform Modernization | Exactly 3 services | Ask first (add/remove/rename) |
| M6 | About pillar card | "Fifteen years of building payment rails, ledgers and platforms" | Not in the owner facts | **Never** (invented credential) |
| M7 | About | "Trusted by 40+ ventures & institutions" + 3 stock face photos | Not a fact | **Never** (invented metric) |
| M8 | Work section | 4 case studies: parallel ledger escrow ($500M+), GOGAME 50M users + exit, crypto–fiat ramping (3 days → 30s), Geneva bank ($2B+) | Facts allow only: co-founded GOGAME, building PowerProof. Case study format Problem / What I did / Result | **Never** (unverified metrics and clients) |
| M9 | "Who I work best with" | Finance & Banking, Digital Assets, Gaming, Enterprise SaaS, AI Platforms, Venture & PE | Startups, businesses, government, founders | Ask first if it implies government clients |
| M10 | Testimonials | 4 invented quotes with names, roles and companies (Northbridge, Vertex Labs, Haven, Crestwell) | No testimonials supplied | **Never** (invented testimonials, named clients) |
| M11 | Stats row | 40+ ventures, 15+ years, $2B+ assets, 50M+ users | No metrics supplied | **Never** (invented metrics) |
| M12 | Contact badges | "4.9 / 5 average client rating", "Reply in 48h", "NDA-friendly" | No rating supplied; turnaround is an owner placeholder | **Never** (rating) / placeholder (turnaround) |
| M13 | FAQ | 5 questions incl. "Can you act as a fractional CTO?" and fintech positioning | 4 set questions (Phase 2, step 6) | Phase 2 |
| M14 | Footer | No disclaimer | "Advisory is practical guidance, not legal, tax or financial advice." on every page | Required text |
| M15 | Contact details | Google Form booking link and LinkedIn from the old site; no email, no GitHub | Booking link, email, LinkedIn, GitHub | Owner placeholder |
| M16 | Name | Logo, preloader and footer say "Srikanta Magaji" | Owner is "Sri"; SEO title starts "Sri \|" | Ask first |
| M17 | Page map | One long page | 7 pages: Home, Services, Who I Work With, Work, About, FAQ, Contact | Ask first (structure) |
| M18 | Values quote | "Features change. Systems endure." — Srikanta Magaji (from the old site) | Off-pitch, not in Part 1 | Ask first |
| M19 | Banned words | None found | — | OK |
| M20 | H1 count | One H1 (hero) | One H1 per page | OK |

## 2. Fixes made

Allowed without asking:

- **M1** SEO title and description set exactly as in Part 1 (index.html).
- **M3** Hero subline is now the pitch word for word. About intro, reel caption and footer blurb tightened to match the pitch.
- **M14** Disclaimer added to the footer.

Required by the "Never" rule (invented content removed; no section deleted):

- **M6** "Fifteen years…" replaced with owner facts: GOGAME co-founder, building PowerProof, Microsoft Research internship.
- **M7** "Trusted by 40+" and the stock face photos removed.
- **M8** Work now shows PowerProof plus two empty slots in Problem / What I did / Result format, all marked "[owner to confirm]". (This also covers Phase 2, step 5.)
- **M10** All 4 invented testimonials removed. The section shows a draft-only "[owner to confirm]" box until a real quote with name and permission arrives.
- **M11** Stats row replaced with the 4 owner facts (GOGAME, PowerProof, Microsoft Research, India). No numbers.
- **M12** "4.9 / 5" rating removed. Reply time and "NDA-friendly" marked "[owner to confirm]". Added "Based in India".
- **M15** Footer shows "Email [owner to confirm]" and "GitHub [owner to confirm]".

Checked: one H1, no banned words, no horizontal scroll, no console errors. Nothing published.

Files touched: index.html, src/data/content.js, src/sections/{Hero,About,ZoomReel,Work,Testimonials,Difference,Contact}.jsx. Added docs/site-context.md (your brief) and CLAUDE.md (points future agents to it).

## 3. Open questions (Ask the owner first)

1. **Services (M5):** replace the 5 draft services with your 3, using exactly the names and bullets in Part 1?
2. **Tagline (M2):** make the hero H1 "Market it. Advise it. Audit it."?
3. **CTA (M4):** change every "Book a Consultation" to "Book a free 15-min call"?
4. **Who I work with (M9):** replace the 6 industries with Startups, Small & mid-size businesses, Government & public sector, Founders? Has government work actually been done? This decides whether the government track can say "I have worked with…" or only "I can help with…".
5. **Name (M16):** "Sri" or "Srikanta Magaji" on the logo, intro screen and footer?
6. **Pages (M17):** split into the 7 pages in the page map, or keep one page with a section for each?
7. **Quote (M18):** keep "Features change. Systems endure." or remove it?
8. **SEO title length:** the Part 1 title is 67 characters, but the rule says under 60. Keep it as written or shorten it? Suggestion: "Sri | Marketing, Advisory & Software Audits" (43).
9. **Contact:** is the Google Form (forms.gle/qtVcq7YDGg3kfZhT9) still the booking link? Is linkedin.com/in/srikanta01 correct? Please send your email and GitHub URL.
10. **Placeholders still open:** prices and turnaround times, PowerProof's problem / what you did / result, whether build / DevOps is offered (currently not listed).
11. **FAQ (M13):** the current FAQ still includes "Can you act as a fractional CTO?". Replace it with the 4 questions from Phase 2, step 6?
