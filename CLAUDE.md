# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Craftorus — a static marketing site for a B2B technology services company (web development, IT infrastructure, camera/security systems, custom software). Next.js App Router, no database, no CMS, no auth. Every page is prerendered at build time.

## Commands

```bash
npm run dev        # next dev --hostname 0.0.0.0  (accessible on LAN)
npm run build      # next build  (Turbopack)
npm run start      # serve the production build
npm run lint       # eslint (flat config, no args)
npm run typecheck  # tsc --noEmit
npm run format     # prettier --write "**/*.{ts,tsx}"
```

There is **no test framework** in this project and no test script. Verify changes with `npm run typecheck` + `npm run lint` + `npm run build`.

`npm run typecheck` is clean. `npm run lint` is **not** — it currently reports 3 errors and 20 warnings on untouched code (e.g. `react-hooks/set-state-in-effect` in `hooks/use-mobile.ts`, unused props in `components/shared/section.tsx`). Compare against a baseline rather than assuming you introduced them.

Requires Node 20.9+.

`.env.local` (gitignored) holds `SMTP_USER` and `SMTP_PASS` for the contact form. `SMTP_PASS` is a Gmail 16-char app password. Without it, `app/api/contact/route.ts` still returns HTTP 200 with `simulated: true` and sends nothing.

## Architecture

### Content is data, not JSX

All copy, images, and section content live in `lib/data/*.data.ts` as plain typed objects. Pages and components import from there and never hardcode marketing copy. Types for the data are declared in the same file as the data (e.g. `ServicePageDataProps`, `ServiceDataProps` in `lib/data/service.data.ts` and `lib/data/page.data.ts`).

`lib/data/contact.data.ts` is the single source of truth for the phone number, WhatsApp number, email, and address — including `getWhatsAppUrl()`, which every CTA button uses. Change contact details there, not in components.

### Pages are thin section compositions

Every `app/**/page.tsx` is a server component that exports `metadata` and composes sections from `components/page-components/`. Section components are dumb presentational units that take a single `content` prop typed against the corresponding data type:

```tsx
// app/services/[service]/page.tsx
<Atf content={page.hero} />        // imported as the service hero
<Solution content={page.solutions} />
<Methodology content={page.methodology} />
```

Each section renders `<Section><Wrapper>` (the layout primitives in `components/shared/`), leads with a `<Marker title="01" description="..." variant="mix" />` whose number is **hand-maintained and sequential** — when inserting a section, renumber the surrounding markers. Headings use `h4`/`h5` inside sections because `h1` is the hero's.

`Header` lives in the root layout, but **`Footer` does not** — each page renders `<Footer />` (`components/layout/footer.tsx`, which is the contact CTA + link list) as its last child. `/contact` is the exception: it uses `page-components/footer` (link list only, no CTA) because the contact form is already there.

### Adding a service

`Service` (a string enum in `lib/types/shared.type.ts`) is the spine of the service system. Adding a service means:

1. Add the enum member — its **value is the URL slug** (`WEB_DEVELOPMENT = "web-development"`).
2. Add a matching record to `servicePagesData` in `lib/data/service.data.ts`; the type requires `hero`, `solutions`, `methodology`, `benefits`, `faqs`.
3. Add desktop + mobile images under `public/images/services/`.
4. Optionally add an entry to the `service` array in `lib/data/nav.data.ts`.

Nothing else is needed. `generateStaticParams`, `app/sitemap.ts`, the services directory, and the contact form's service `<Select>` all derive from the enum and `servicePagesData`.

### Styling

Tailwind v4, CSS-first — **there is no `tailwind.config.js`**. Design tokens are OKLCH custom properties in `app/globals.css` under `:root` / `.dark`, exposed to Tailwind via `@theme inline`. Dark mode is class-based (`@custom-variant dark (&:is(.dark *))`) driven by `next-themes`.

Beyond tokens, `globals.css` defines project-level utility classes in `@layer base` — `.section`, `.section.lg`, `.section.xl`, `.wrapper`, `.grid-25by25`, `.grid-30byb3`, `.grid-50by50`, `.grid-60by40`, `.grid-40by60` — plus responsive base styles for `h1`–`h6` and `p`. Prefer these over hand-rolling padding/grid utilities.

Fonts: `--font-heading` (Outfit) for headings, `--font-sans` (Geist) for body, `--font-mono` (Geist Mono), all loaded in `app/layout.tsx` via `next/font`.

`components/layout/theme-provider.tsx` wraps `next-themes` and adds a `d` keyboard shortcut to toggle light/dark (suppressed while typing in an input).

### shadcn on Base UI, not Radix

`components/ui/*` are shadcn components in the **`base-vega`** style built on `@base-ui/react`, not Radix. Consequences when editing them or their call sites:

- Base UI's `render` prop replaces Radix's `asChild` — e.g. `<NavigationMenuLink render={<Link href="..." />}>`.
- Select takes an `items` prop for its options.
- Do not copy Radix/Sonner-era shadcn snippets from the web into these files; they will not match.

`cn` is not a local implementation — it is the standalone [`cn`](https://www.npmjs.com/package/cn) package, re-exported from `lib/utils.ts`. Some files import it directly from `"cn"`. Either import path is in use; prefer `@/lib/utils`.

## Next.js 16 — this is not the Next.js you know

The project is on **Next.js 16.2.6**, which postdates typical training data. `AGENTS.md` instructs reading `node_modules/next/dist/docs/` before writing framework code — the docs are bundled locally under `01-app/` (getting-started, guides, api-reference) and the version-16 upgrade guide is at `01-app/02-guides/upgrading/version-16.md`.

The facts that matter most here:

- **`params` and `searchParams` are Promises.** Sync access was removed in v16 — always `await` them in pages, `generateMetadata`, and route handlers (`const { service } = await params`). Global `PageProps<'/route'>` / `LayoutProps<'/route'>` / `RouteContext<'/route'>` type helpers are generated into `.next/types` by `next dev`/`next build` and can be used without importing.
- **`middleware.ts` is deprecated in favour of `proxy.ts`** at the project root, exporting `function proxy(request)`. Proxy always runs on Node.js and cannot use the edge runtime. This project has no middleware yet.
- **Turbopack is the default** for both `dev` and `build`; no `--turbopack` flag. A plain `next build` fails by design if a webpack config is present — pass `--webpack` to opt out.
- **`next lint` is removed** and `next build` no longer lints. Run ESLint directly (`npm run lint`).
- `cacheComponents` is **not** enabled here, so the old caching model applies (`fetch` uncached by default, `unstable_cache` for non-fetch work). If it is ever turned on, PPR becomes the default and uncached data outside a `<Suspense>` boundary is a build error.
- Next 16 no longer forces `scroll-behavior: smooth` away on client navigation. If smooth anchor scrolling is ever needed, add `data-scroll-behavior="smooth"` to `<html>` in the root layout.

## Conventions

- Prettier: no semicolons, double quotes, 2-space indent, 80-col print width, with `prettier-plugin-tailwindcss` sorting classes. Note that much of `lib/data/` predates this config and is not formatted to match — run `npm run format` rather than hand-fixing quotes.
- Import alias is `@/*` → repo root (`tsconfig.json`).
- `MobileNav`/`DesktopNav` switch on `useIsMobile()` (`hooks/use-mobile.ts`), which uses `MOBILE_BREAKPOINT = 1024` from `lib/constants/constants.ts`.
- Client components need an explicit `"use client"` directive — most page sections are server components and must stay that way.
- `next.config.ts` is intentionally empty; images are all local under `public/`.
