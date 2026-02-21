# Gulaal International Website Redesign

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the single-page Gulaal International site into a clean 3-page website (Home + About + Services) by removing all fake content, fixing the two-font pattern, reframing e-commerce as "selling products online" (not providing e-com services), and keeping the existing design system's visual quality.

**Architecture:** Next.js 16 App Router with 3 routes: `/` (landing), `/about`, `/services`. All components use the existing inline-style design system (Inter font, black/white palette, maxWidth 83rem, pill labels, bordered cards). Use 21st.dev Magic MCP for new page component designs where helpful.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4 (mostly inline styles), motion (Framer Motion), swiper, @phosphor-icons/react

---

## Summary of Changes

### Remove entirely:
- `components/Testimonials.tsx` — all fake testimonials with randomuser.me photos
- `components/Industries.tsx` — 20-industry grid is too ambitious for a new company
- `components/Stats.tsx` — fake stats + broken image references
- `components/ui/CardStack.tsx` — used only for fake testimonial cards
- `components/ui/TestimonialsColumn.tsx` — used only for fake scrolling testimonials
- `components/Process.tsx` — not used in page.tsx but exists in codebase (dead code)

### Modify:
- `app/globals.css` — remove Cormorant Garamond font, `--font-display` var, `.italic-span` class
- `app/layout.tsx` — update metadata descriptions
- `app/page.tsx` — remove deleted section imports, simplified section order
- `components/NavBar.tsx` — multi-page routing with Link components
- `components/Hero.tsx` — remove ItalicSpan, rewrite copy, remove fake social proof
- `components/WhySection.tsx` — remove CardStack/testimonials, make full-width, rewrite
- `components/Services.tsx` — reframe e-commerce as "selling products" not "providing services"
- `components/ContactCTA.tsx` — remove ItalicSpan, rewrite copy/FAQ
- `components/Footer.tsx` — update sitemap links for 3 pages

### Create:
- `app/about/page.tsx` — About Us page
- `app/services/page.tsx` — Services detail page

---

## Task 1: CSS & Font Cleanup

**Files:**
- Modify: `app/globals.css`

**Step 1: Remove Cormorant Garamond from font import**

In `app/globals.css` line 1, change the Google Fonts import from:
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap");
```
to:
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");
```

**Step 2: Remove `--font-display` theme variable**

In the `@theme` block, remove line 22:
```css
  --font-display: "Cormorant Garamond", Georgia, serif;
```

**Step 3: Remove `.italic-span` class**

Remove the entire block at lines 157-162:
```css
.italic-span {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-style: italic;
  font-weight: 400;
}
```

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds (the removed CSS class is only used in components we'll also be cleaning up)

**Step 5: Commit**

```bash
git add app/globals.css
git commit -m "chore: remove Cormorant Garamond font and italic-span pattern"
```

---

## Task 2: Update Layout Metadata

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update metadata for vague-but-professional descriptions**

Replace the metadata object (lines 5-28) with:
```typescript
export const metadata: Metadata = {
  title: "Gulaal International — Online Retail & Project Management in the UAE",
  description:
    "Gulaal International is a UAE-based company specializing in online retail and project management across the Emirates.",
  keywords: [
    "Gulaal International",
    "UAE business",
    "online retail UAE",
    "project management Dubai",
    "Dubai business",
  ],
  openGraph: {
    title: "Gulaal International — Online Retail & Project Management in the UAE",
    description:
      "A UAE-based company specializing in online retail and project management.",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulaal International",
    description: "Online retail and project management in the UAE.",
  },
};
```

**Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "chore: update metadata to reflect accurate business description"
```

---

## Task 3: NavBar — Multi-Page Routing

**Files:**
- Modify: `components/NavBar.tsx`

**Step 1: Add Next.js Link import and update nav links**

Add `import Link from "next/link";` at top.

Change the `links` array (line 7-12) to use page routes:
```typescript
const links = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/#contact" },
];
```

**Step 2: Replace all `<a>` tags for nav links with `<Link>`**

In the desktop nav (line 86-110), change `<a>` to `<Link>` for each link.

In the mobile menu (line 186-203), change `<a>` to `<Link>` for each link.

Keep the "Get in Touch" CTA as `<Link href="/#contact">`.

Keep the logo link as `<Link href="/">`.

**Step 3: Verify dev server**

Run: `npm run dev`
Verify: NavBar renders with updated links, clicking "About" and "Services" will 404 (expected — pages not created yet)

**Step 4: Commit**

```bash
git add components/NavBar.tsx
git commit -m "feat: update NavBar to multi-page routing with Next.js Link"
```

---

## Task 4: Hero — Content Cleanup

**Files:**
- Modify: `components/Hero.tsx`

**Step 1: Remove ItalicSpan usage from heading**

Replace the h1 content (lines 135-142):
```
Grow your{" "}
<span className="italic-span">b</span>
usiness{" "}
<span className="italic-span">i</span>n the{" "}
<span className="italic-span">U</span>
AE — without the{" "}
<span className="italic-span">g</span>
uesswork.
```

With a clean heading (no italic spans):
```
Building commerce and managing projects across the UAE.
```

**Step 2: Rewrite sub-headline**

Replace the `<p>` text (line 156):
```
End-to-end e-commerce and project management services, built for ambitious brands entering the Gulf market.
```
With:
```
A UAE-based company specializing in online retail and project management.
```

**Step 3: Remove fake social proof**

Delete the entire "Social proof" block (lines 234-274) — the section containing:
- The isomeet avatar image (`/isomeet/690126cccb69ed9dab42341b_confirm_users_image.avif`)
- "50+ brands already scaling in the UAE"

**Step 4: Simplify Hero CTA**

Replace the email form (lines 173-232) with a simpler CTA section:
- Keep a "Get in Touch" button linking to `/#contact`
- Remove the email input field (no backend to receive it in the hero)

**Step 5: Remove isomeet background gradient blob**

Delete the background gradient image (lines 445-466) that references `/isomeet/6901e53513dcf1ea037d2e38_bg-gradient.avif`. Replace with a pure CSS subtle gradient or remove entirely.

**Step 6: Verify dev server**

Run: `npm run dev`
Verify: Hero shows clean heading in Inter only, no italic mixing, no fake social proof

**Step 7: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: clean Hero content — remove fake social proof, fix font mixing"
```

---

## Task 5: WhySection — Remove Fake Testimonials, Rewrite

**Files:**
- Modify: `components/WhySection.tsx`

**Step 1: Remove CardStack import and testimonial data**

- Remove `import { CardStack } from "./ui/CardStack";` (line 3)
- Remove the entire `ItalicSpan` component (lines 5-11)
- Remove the entire `testimonialCards` array (lines 43-68)

**Step 2: Rewrite heading and benefits**

Change heading from:
```
Bec<ItalicSpan>a</ItalicSpan>use bu<ItalicSpan>s</ItalicSpan>iness gr<ItalicSpan>o</ItalicSpan>wth sho<ItalicSpan>u</ItalicSpan>ldn't be this com<ItalicSpan>p</ItalicSpan>licat<ItalicSpan>e</ItalicSpan>d
```
To plain Inter text:
```
Why businesses choose Gulaal
```

Change description from specific claims to:
```
We bring local expertise and operational discipline to every engagement — whether it's online retail or project management.
```

**Step 3: Rewrite benefit cards (vaguer, no specific claims)**

Replace the `benefits` array content:
```typescript
const benefits = [
    {
        icon: /* keep existing SVG */,
        title: "Streamlined Operations",
        desc: "Clear processes and structured workflows that keep everything moving forward without the usual friction.",
    },
    {
        icon: /* keep existing SVG */,
        title: "Clear Communication",
        desc: "Transparent updates and straightforward reporting, so you always know where things stand.",
    },
    {
        icon: /* keep existing SVG */,
        title: "Local Expertise",
        desc: "Deep understanding of the UAE market, regulations, and business landscape — built from experience on the ground.",
    },
];
```

**Step 4: Convert header from 2-col to full-width**

Remove the CardStack right column entirely (the "What clients say" label and `<CardStack>` component).

Change the header grid from `gridTemplateColumns: "1fr 1fr"` to `gridTemplateColumns: "1fr"` and remove the right column div.

**Step 5: Verify dev server**

Run: `npm run dev`
Verify: WhySection shows clean heading, no testimonials, 3 vaguer benefit cards

**Step 6: Commit**

```bash
git add components/WhySection.tsx
git commit -m "feat: simplify WhySection — remove fake testimonials, rewrite copy"
```

---

## Task 6: Services — Reframe E-Commerce

**Files:**
- Modify: `components/Services.tsx`

**Step 1: Remove ItalicSpan component**

Delete the `ItalicSpan` component definition (lines 167-177).

**Step 2: Rewrite heading**

Change from:
```
We've<ItalicSpan>v</ItalicSpan>e done the h<ItalicSpan>a</ItalicSpan>rd part...
```
To plain text:
```
What we do
```

Change the sub-description to:
```
Two core capabilities — online retail and project management — delivered with focus and discipline.
```

**Step 3: Rewrite Project Management cards (vaguer)**

Replace `pmServices` array:
```typescript
const pmServices: BentoCard[] = [
    {
        title: "Planning & Scoping",
        description:
            "Structured roadmaps and clear milestones from the start. Every project begins with a well-defined plan.",
    },
    {
        title: "Execution & Coordination",
        description:
            "Hands-on management across every phase — keeping teams, timelines, and deliverables aligned.",
    },
    {
        title: "Reporting & Oversight",
        description:
            "Regular updates and transparent communication throughout the project lifecycle.",
    },
    {
        title: "Local Compliance",
        description:
            "Navigating UAE regulations and requirements so your project stays on track and fully compliant.",
    },
];
```

**Step 4: Rewrite E-Commerce cards (selling products, NOT providing services)**

Replace `ecomServices` array:
```typescript
const ecomServices: BentoCard[] = [
    {
        title: "Product Curation",
        description:
            "Carefully selected products for the UAE consumer market — sourced and managed with quality in mind.",
    },
    {
        title: "Online Storefronts",
        description:
            "Operating across leading platforms to reach customers throughout the Emirates.",
    },
    {
        title: "Fulfillment & Delivery",
        description:
            "End-to-end logistics — from warehouse to doorstep — ensuring reliable delivery across the UAE.",
    },
    {
        title: "Market Insights",
        description:
            "Continuously learning from the market to refine our offerings and serve customers better.",
    },
];
```

**Step 5: Update section labels**

Change the PM section label from "Project Management" to "Project Management".
Change the E-Commerce section label from "E-Commerce" to "Online Retail".

**Step 6: Update CTA strip text**

Change:
```
Built for UAE businesses — every service is tailored to the local market, regulations, and pace of growth.
```
To:
```
Based in the UAE — everything we do is built around the local market and its unique pace of growth.
```

**Step 7: Commit**

```bash
git add components/Services.tsx
git commit -m "feat: reframe Services — e-commerce as online retail, vaguer copy"
```

---

## Task 7: ContactCTA — Clean Up

**Files:**
- Modify: `components/ContactCTA.tsx`

**Step 1: Remove ItalicSpan component** (lines 4-9)

**Step 2: Rewrite heading**

Change from:
```
St<ItalicSpan>a</ItalicSpan>rt your pr<ItalicSpan>o</ItalicSpan>ject bef<ItalicSpan>o</ItalicSpan>re anyone<ItalicSpan> </ItalicSpan>else d<ItalicSpan>o</ItalicSpan>es
```
To:
```
Let's talk about your next move
```

**Step 3: Rewrite FAQs (more generic)**

Replace `faqs` array with:
```typescript
const faqs = [
    {
        q: "What services does Gulaal International offer?",
        a: "We specialize in two areas: online retail across the UAE and project management services. We're focused on delivering quality in both.",
    },
    {
        q: "Where are you based?",
        a: "We're based in the UAE and serve clients across the Emirates. All communication and coordination is handled directly by our team.",
    },
    {
        q: "How do I get started?",
        a: "Fill out the form or reach out via email. We'll schedule a brief conversation to understand your needs and see if we're the right fit.",
    },
    {
        q: "Do you work with international clients?",
        a: "Our primary focus is the UAE market, but we're open to conversations with businesses looking to enter or operate in the region.",
    },
    {
        q: "What's your typical engagement like?",
        a: "Every engagement is different, but we always start with a conversation to understand scope and goals before proposing a clear plan.",
    },
];
```

**Step 4: Update form radio options**

Change from `["Project Management", "E-Commerce Setup", "Both"]` to:
```typescript
["Project Management", "Online Retail", "General Inquiry"]
```

**Step 5: Commit**

```bash
git add components/ContactCTA.tsx
git commit -m "feat: clean ContactCTA — remove italic spans, rewrite FAQ copy"
```

---

## Task 8: Footer — Update Links

**Files:**
- Modify: `components/Footer.tsx`

**Step 1: Add Link import**

Add `import Link from "next/link";`

**Step 2: Update sitemap links**

Replace the sitemap links array (lines 67-71):
```typescript
{[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/#contact" },
].map((l) => (
    <Link key={l.href} href={l.href} ...>
```

**Step 3: Update tagline**

Change:
```
From the team behind Gulaal International — built by people who've lived it.
```
To:
```
Online retail and project management, based in the UAE.
```

**Step 4: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: update Footer with multi-page links and cleaner tagline"
```

---

## Task 9: Landing Page — Remove Deleted Sections

**Files:**
- Modify: `app/page.tsx`

**Step 1: Remove imports for deleted components**

Remove these imports:
```typescript
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
```

**Step 2: Remove components from JSX**

Remove `<Industries />`, `<Testimonials />`, and `<Stats />` from the `<main>` element.

Final page.tsx should be:
```typescript
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <WhySection />
      <Services />
      <ContactCTA />
      <Footer />
    </main>
  );
}
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: streamline landing page — remove Industries, Testimonials, Stats"
```

---

## Task 10: Delete Unused Components

**Files:**
- Delete: `components/Testimonials.tsx`
- Delete: `components/Industries.tsx`
- Delete: `components/Stats.tsx`
- Delete: `components/Process.tsx` (dead code — never imported in page.tsx)
- Delete: `components/ui/CardStack.tsx` (no longer used)
- Delete: `components/ui/TestimonialsColumn.tsx` (no longer used)

**Step 1: Delete all unused files**

```bash
rm components/Testimonials.tsx
rm components/Industries.tsx
rm components/Stats.tsx
rm components/Process.tsx
rm components/ui/CardStack.tsx
rm components/ui/TestimonialsColumn.tsx
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds — none of these files are imported anymore

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: delete unused components (testimonials, industries, stats, cardstack)"
```

---

## Task 11: About Page

**Files:**
- Create: `app/about/page.tsx`

**Step 1: Use Magic MCP for component inspiration**

Use the 21st.dev Magic MCP `21st_magic_component_builder` tool to get design inspiration for an About page hero and values section. Search queries: "about us hero section", "company values cards".

**Step 2: Create the About page**

Create `app/about/page.tsx` with these sections, matching the existing design system (Inter font, inline styles, black/white palette, maxWidth 83rem, padding 0 3.5rem, paddingBlock 8.25rem, pill labels with `border: 1px solid rgba(0,0,0,0.1)`, rounded cards):

**Section 1 — Page Hero:**
- Pill label: "About Us"
- Heading: "Built for the UAE market."
- Description: "Gulaal International is a UAE-based company focused on online retail and project management, serving businesses and consumers across the Gulf region."
- Clean text layout, no images

**Section 2 — Our Mission (2-column):**
- Left: paragraph about understanding the local market. Text: "We combine local market knowledge with operational discipline to deliver results — whether that means getting products to customers across the Emirates or managing complex projects from start to finish."
- Right: 3 small detail items (not stat numbers): "UAE-Based Operations", "Online Retail & Project Management", "Growth-Oriented Approach"

**Section 3 — Values (3 cards matching WhySection benefit card design):**
- Card 1: "Integrity" — "We operate with honesty and transparency in every interaction."
- Card 2: "Efficiency" — "Streamlined processes that respect your time and resources."
- Card 3: "Local First" — "Everything we do is grounded in a deep understanding of the UAE market."

**Section 4 — CTA Banner:**
- Centered layout
- "Want to work with us?" heading
- "Get in Touch" button linking to `/#contact`

Include `NavBar` and `Footer` components (import from `@/components/`).

**Step 3: Verify dev server**

Run: `npm run dev`
Navigate to `/about` — verify page renders correctly

**Step 4: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add About page with mission, values, and CTA"
```

---

## Task 12: Services Page

**Files:**
- Create: `app/services/page.tsx`

**Step 1: Use Magic MCP for component design**

Use the 21st.dev Magic MCP `21st_magic_component_builder` tool for services page layout. Search query: "services page bento grid".

**Step 2: Create the Services page**

Create `app/services/page.tsx` with these sections, matching existing design system:

**Section 1 — Page Hero:**
- Pill label: "Services"
- Heading: "What we do."
- Description: "Two core capabilities, one reliable partner."

**Section 2 — Online Retail:**
- Section label (uppercase, muted): "ONLINE RETAIL"
- Heading: "Bringing quality products to the UAE market."
- Description: "We source, curate, and sell products online — operating across leading platforms to reach customers throughout the Emirates."
- 3 bento cards (reuse BentoCard pattern from Services.tsx, with CornerPlus decorations):
  - "Product Curation" — "Carefully selected products for the UAE consumer."
  - "Online Operations" — "End-to-end management of our digital storefronts."
  - "Delivery & Fulfillment" — "Reliable logistics across the Emirates."

**Section 3 — Project Management:**
- Section label: "PROJECT MANAGEMENT"
- Heading: "Structured delivery, every time."
- Description: "From planning to execution, we manage projects with clarity and discipline."
- 3 bento cards:
  - "Planning & Scoping" — "Clear roadmaps from day one."
  - "Execution & Coordination" — "Hands-on management across every milestone."
  - "Reporting & Oversight" — "Transparent communication throughout."

**Section 4 — CTA Strip:**
- Same pattern as landing page Services CTA strip
- Text: "Ready to get started?" + "Get in Touch" button → `/#contact`

Include `NavBar` and `Footer` components.

**Step 3: Verify dev server**

Run: `npm run dev`
Navigate to `/services` — verify page renders correctly

**Step 4: Commit**

```bash
git add app/services/page.tsx
git commit -m "feat: add Services page with online retail and project management sections"
```

---

## Task 13: Final Verification & Cleanup

**Step 1: Full build check**

Run: `npm run build`
Expected: Clean build with no errors or warnings

**Step 2: Lint check**

Run: `npm run lint`
Expected: No lint errors

**Step 3: Visual verification**

Run: `npm run dev`
Check all 3 pages:
- `/` — Landing: Hero → WhySection → Services → ContactCTA → Footer
- `/about` — NavBar → Hero → Mission → Values → CTA → Footer
- `/services` — NavBar → Hero → Online Retail → PM → CTA → Footer

Verify:
- No Cormorant Garamond italic anywhere (all Inter)
- No fake testimonials or stats
- No randomuser.me images
- NavBar links work across pages
- Footer links work across pages
- Mobile responsive still works

**Step 4: Clean up any unused isomeet assets (optional)**

The `/public/isomeet/` directory contains legacy assets. After confirming Hero no longer references the gradient blob, consider removing unused isomeet files. Keep any that are still referenced.

**Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final cleanup and verification"
```

---

## Task Dependency Graph

```
Task 1 (CSS cleanup)
Task 2 (Metadata) ──────────────┐
Task 3 (NavBar) ─────────────── │
Task 4 (Hero) ───────────────── │
Task 5 (WhySection) ──────────  ├──→ Task 9 (Landing page.tsx) ──→ Task 10 (Delete files) ──→ Task 13 (Verify)
Task 6 (Services) ─────────── │
Task 7 (ContactCTA) ────────── │
Task 8 (Footer) ──────────────┘
                                      Task 11 (About page) ──→ Task 13
                                      Task 12 (Services page) ──→ Task 13
```

Tasks 1-8 can be done in any order (or in parallel). Task 9 depends on Tasks 4-8. Task 10 depends on Task 9. Tasks 11-12 can be done in parallel after Task 3+8 (NavBar/Footer updated). Task 13 is the final gate.
