# Craftorus v2 — Content & Structure Plan

Goal: move the site from reading like a SaaS product landing page to reading like a technology **services** company — the one described in `docs/Company.md` (B2B systems integrator) and `docs/Plan.md` (web + cameras + computers).

GSAP work is in Phase 4. Phases 1–3 are independent of it and should land first.

---

## Phase 0 — Prerequisites

- [ ] Read `CLAUDE.md` — repo conventions, the data-driven architecture, and the Next.js 16 notes.
- [ ] Branch. Current `main` is clean.
- [ ] Decide the final service route list (Phase 1.1) before writing any content — it drives everything else.

---

## Phase 1 — Structural changes

### 1.1 Reshape the service architecture

**Problem:** the homepage sells 3 service lines; the site ships 9 service pages, all digital. The two lines that involve a site visit — Computers & IT, Cameras & Security — have **no page** and their CTAs point at `/contact` (`lib/data/page.data.ts`, `ctaLink`).

**Change:** reduce 9 routes → 5, and add the 2 missing ones.

| Current slug | Action | Becomes |
|---|---|---|
| `web-development` | keep | Website Development — absorbs landing pages, ecommerce-lite, SEO, HTML emails, web apps |
| `ecommerce-website` | keep | Ecommerce Builds |
| `software-development` | keep | Software & Mobile — absorbs `ai-agents`, `mobile-apps` |
| — | **new** | `computers-it` — supply, setup, networking, AMC |
| — | **new** | `camera-security` — CCTV supply, install, config, AMC |
| `landing-pages` | fold into web-development | — |
| `html-emailers` | fold into web-development | — |
| `seo-marketing` | fold into web-development | — |
| `co-brand-images` | **delete** | weakest offering, no page earns it |
| `ai-agents` | fold into software-development | — |
| `mobile-apps` | fold into software-development | — |

**Files:** `lib/types/shared.type.ts` (the `Service` enum — enum *values are the URL slugs*), `lib/data/service.data.ts` (`servicePagesData`), `lib/data/nav.data.ts` (`service` array), `public/images/services/`.

**Note:** `generateStaticParams`, `app/sitemap.ts`, the `/services` directory and the contact form dropdown all derive from the enum — no other wiring needed. Add 301 redirects for the 4 folded slugs in `next.config.ts`.

### 1.2 Remove the technology strip

**Problem:** `components/page-components/techonology.tsx` renders 35 stack badges (`technologiesData` in `lib/data/page.data.ts`, all tagged `[PRO SYSTEM]`) under the line *"Our systems are engineered in structured layers for scale."* It appears on the homepage and `/services`. Kubernetes and LangChain on a CCTV contractor's site actively costs credibility.

- [ ] Remove `<Techonology />` from `app/page.tsx` and `app/services/page.tsx`
- [ ] Delete `components/page-components/techonology.tsx` and `components/card/tech-card.tsx`
- [ ] Move a **trimmed** version (6–8 items, no badges) to the `web-development` service page only, as a credibility note for buyers who do care
- [ ] Delete the `technologiesData` array

### 1.3 Add the sections a service site needs

Currently on the homepage: hero → what we do → our services → why us → technology → insights → contact CTA. Missing everything a buyer actually needs to decide.

- [ ] **`components/page-components/how-it-works.tsx`** — 3 steps from `docs/Plan.md`: *Assess (site visit or scoping call) → Fixed quote → Install & hand over, with AMC optional.* Attach a real commitment: "site visit within 48 hours across Mumbai."
- [ ] **Service area** — make Mumbai + coverage explicit. New `serviceArea` field in `lib/data/contact.data.ts`. This currently appears nowhere except a footer address.
- [ ] **AMC / maintenance as a headline offer** — recurring revenue is the thing a services business has and SaaS doesn't. It is currently only in `docs/Plan.md`.
- [ ] **Response-time promise** — "enquiries answered within 24 hours" exists only on `/contact`. Surface it near the hero CTA.

### 1.4 Fix the proof

**Problem:** `work.data.ts` has 3 projects with `link: "#"`, two marked `status: "Concept"`. `insightsData` has 3 posts with `readMoreLink: "#"`. Dead links behind a "Work" page read as an unfinished template.

- [ ] Ship **one real case study per service line** (`docs/Company.md` already says this). A real CCTV install — photo, location, what was installed, how long it took — beats three concepts.
- [ ] If no real work exists yet, **cut the `/work` page and its nav entry** rather than shipping placeholders. A missing page is honest; a page of concepts is not.
- [ ] Delete `insightsData` and `components/page-components/latest-insight.tsx`, or point the three posts at real articles. The current three have no article behind them.

### 1.5 Clean up dead assets

- [ ] `lib/data/about.data.ts` — `aboutData.founder.imageUrl` points to `/images/about/founder.png`, which does not exist (`public/images/about/` is not present). The whole `aboutData.founder` object is **never rendered**. Either use it (add a founder section to `/about` — for a one-person studio this is a trust asset) or delete it.
- [ ] `projectsData[0]` and `projectsData[2]` both use `/images/services/web-development-mobile-4.png` — the same image for "Custom Business Software" and "Business Computer Setup".

---

## Phase 2 — Content rewrites

Voice target: **a competent contractor who explains things plainly.** Not a studio. Not a SaaS. Test every line — would a business owner repeat it back correctly after hearing it once?

### 2.1 Hero (`components/page-components/hero/home-hero.tsx`)

Current: *"Technology that makes your business look the part"* — says nothing about what, where, or how.

Proposed:

> **h1:** We build, install and maintain the technology your business runs on.
>
> **body:** Websites, computers, networking and camera security for growing businesses in Mumbai. One team handles the whole setup — supplied, installed, and maintained after we leave.
>
> **CTA 1:** Get a quote (WhatsApp) · **CTA 2:** See our services

Says what, where, and the differentiator (one team, full lifecycle) in three lines.

### 2.2 Section headers — drop the studio register

| Current | Proposed |
|---|---|
| "Small studio. Serious standards." | "You deal with the person doing the work." |
| "The work matters more than the noise around it." | "Technology that keeps working after we leave." |
| "Built with the right technology." *(deleted)* | — |
| "Specialized Digital Services" | "What we do" |
| "Our Services" | "Services" |

### 2.3 Commercial information (new)

Add to each service page, and surface the ranges on the homepage:

- **Starting-from price ranges.** You don't need exact quotes — you need to stop the visitor bouncing because they assume it's unaffordable. Pull into a new `pricing` block in each `ServicePageDataProps`.
- **Typical timeline** per service ("Website: 2–4 weeks", "CCTV install: 1–2 days", "Office computer setup: 1–3 days").
- **What's included vs. extra** — a two-column list. This is the single most-reassuring element on a services site and it's currently absent everywhere.

### 2.4 FAQs for the two new service pages

The `faqs` block already exists in the type — use it hard. These are the real objections:

*Cameras & Security:* How long does an install take? Do you cover areas outside Mumbai? What happens if a camera fails? Is the footage viewable on my phone? Do you offer annual maintenance?

*Computers & IT:* Do you supply the hardware or work with what we have? Do you come to our office? Can you take over a system another IT company set up? Do you do AMC?

### 2.5 Consistency sweep

- [ ] `docs/Plan.md` mentions "first-project rates" and "AMC available" — get that copy onto the site, it's the strongest differentiator you have and it's currently invisible.
- [ ] WhatsApp / phone / hours currently live only in `/contact`. The WhatsApp CTA is already the primary hero button — fine — but response time and hours should appear near it.

---

## Phase 3 — Voice & consistency

- [ ] Homepage numbered markers (`01`…`06`) are fine and give the page rhythm — keep, but re-check they renumber correctly if sections are added/removed.
- [ ] `Marker title="04" description="Technology"` disappears with 1.2 — the remaining markers need renumbering.
- [ ] Remove the word "digital" where it doesn't apply. "Specialized **Digital** Services" for a company that installs CCTV is the wrong frame.

---

## Phase 4 — GSAP animation

Restrained on purpose. Motion should signal craft, not motion design. **Explicitly not doing:** parallax, scroll-jacking, marquees, counters-on-everything, or anything that would push the site *further* toward SaaS landing-page territory.

### 4.1 Setup

- [ ] `npm i gsap @gsap/react` — `gsap@3.15.0`, `@gsap/react@2.1.2`
  - Verified: `ScrollTrigger`, `SplitText` and `Flip` all ship inside the public `gsap` package. No Club membership required.
- [ ] `components/animation/gsap-provider.tsx` — `"use client"`, registers `ScrollTrigger` once at module scope, mounted from `app/layout.tsx` inside `ThemeProvider`.
- [ ] Keep animation logic in dedicated wrappers. **Do not** sprinkle `gsap.to()` through server components — every animated section stays a server component that renders a small client wrapper.

### 4.2 Primitives

Four reusable pieces, each used in several places:

| Component | What it does |
|---|---|
| `components/animation/reveal.tsx` | Fade + 16px rise on scroll into view. The workhorse — use for ~80% of sections. |
| `components/animation/marker-reveal.tsx` | Animates the `<Marker>` number and its `hr` rule drawing in. Ties into the existing numbered-section system. |
| `components/animation/hero-entrance.tsx` | One-time staggered entrance for hero text + CTA. Runs on load, not scroll. |
| `components/animation/stagger-cards.tsx` | Staggered reveal for card grids (`FeatureCard`, `ServiceCard`, service directory). |

### 4.3 Where to apply

- Hero entrance — once, on load, ~0.6s total. Subtle.
- Section reveals on `/`, `/services`, `/about`, `/work`, and each service page.
- Marker rule draw-in.
- Service page `<Atf />` hero — restrained; the existing image treatment already does a lot.

### 4.4 Implementation notes for this codebase

- **`ScrollTrigger.refresh()` after load.** This site uses `next/font` and `next/image`; if fonts or images settle after the trigger positions are computed, sections fire at the wrong scroll offsets. Refresh on `load` and on route change.
- **Respect `MOBILE_BREAKPOINT` (1024)** from `lib/constants/constants.ts` — use `gsap.matchMedia()` so mobile gets simpler, cheaper animations, and desktop-only effects stay desktop-only.
- **Accessibility — mandatory.** Wrap animations in `gsap.matchMedia()` with `(prefers-reduced-motion: no-preference)`. Users with reduced-motion set should get the content instantly, with no transform.
- Use `useGSAP()` from `@gsap/react`, not bare `useEffect` — it scopes and reverts the GSAP context correctly under React 19 Strict Mode double-invocation.
- Reveal animations must be `once: true`. A section that re-animates every time you scroll past it feels cheap.
- Avoid `SplitText` on body copy — it wraps words in spans, which hurts text selection, screen readers, and can break `next/font` measurement. Reserve it for short headings only.

---

## Out of scope

- CMS or blog. Not the bottleneck.
- Redesigning the visual system. The design is fine — the *structure and copy* are what read as SaaS.
- Performance work beyond the animation. The site is already fully static.

---

## Verification

```bash
npm run typecheck
npm run lint        # baseline: 3 errors / 20 warnings, pre-existing — see CLAUDE.md
npm run build
npm run dev         # check trigger offsets at 375px, 768px, 1024px, 1440px
```

- [ ] With JS disabled, all content is visible (reveal animations must not hide content by default)
- [ ] OS reduced-motion on → no transforms, content static
- [ ] Every `/services/*` route builds and appears in `sitemap.xml`
- [ ] Folded slugs 301 to their new parent
- [ ] No `#` links remain anywhere
- [ ] Contact form still delivers (or returns `simulated: true` without `SMTP_PASS`)

---

## Suggested order

1. **1.1 + 1.2** — reshape services, delete tech strip. Biggest perception shift, least new writing.
2. **Phase 2** — hero and voice rewrites, while the page structure is still fresh.
3. **1.3 + 2.3 + 2.4** — new sections, pricing, FAQs. Needs the final route list from 1.1.
4. **1.4 + 1.5** — proof and cleanup. Depends on having real work to show.
5. **Phase 4** — GSAP last, on a settled layout. Animating positions that will move is wasted work.
