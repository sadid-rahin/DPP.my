# DPP Portfolio Design System

This document outlines the core UI/UX guidelines for the DPP Company website. All AI assistants and developers must adhere to these rules before generating or modifying UI components.

The look is dark, glassy and animated: a drifting aurora background, frosted cards, teal glows and scroll-in motion.

## 1. Core Colors
Dark-mode-first. Avoid bright white backgrounds.

| Role | Value | Tailwind | Use |
|---|---|---|---|
| Page background | `#05070f` | `bg-ink` | Base layer, drawn by `<Aurora />` |
| Dark (legacy) | `#0f172a` | `bg-dark`, `bg-slate-900` | Solid fills where glass is not suitable |
| Primary accent (teal) | `#2dd4bf` | `text-accent`, `bg-accent` | Primary buttons, active links, key highlights |
| Secondary accent (gold) | `#fbbf24` | `text-gold`, `border-gold` | Premium tier, review stars, special badges. Use sparingly |
| Aurora blobs | blue, violet, gold at 10-25% opacity | `bg-blue-500/20`, `bg-violet-600/20`, `bg-gold/10` | Background only |
| Body text | | `text-slate-300`, `text-slate-400` | Paragraphs |
| Headings | | `text-white` | Headings only |

## 2. Typography
- **Primary font:** `Inter` (sans-serif).
- **Headings:** `font-bold` or `font-extrabold` with `tracking-tight`.
- **Page titles:** use `<SectionHeading accent="Word">Plain words</SectionHeading>`. It renders a white title with a shimmering teal accent word and a growing underline. Do not hand-write `<h2>` titles.
- **Hero gradients:** large headings use `bg-clip-text text-transparent bg-gradient-to-r from-accent via-sky-300 to-blue-400`. Add `bg-[length:200%_auto] animate-text-shimmer` for the moving shine.

## 3. UI Components & Borders
- **Cards (glass):** `bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/10`. Use `rounded-2xl` for smaller inner panels and inputs.
- **Hover:** border turns `hover:border-accent/60` and a soft teal glow appears, for example `hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.35)]`. Add a corner glow blob (`bg-accent/20 blur-3xl`) that fades in on hover for feature cards.
- **Inputs:** `bg-slate-950/60 border border-white/10 rounded-xl p-3.5 placeholder:text-slate-500`, with `focus:border-accent focus:shadow-[0_0_0_4px_rgba(45,212,191,0.12)]`.
- **Form panels:** glass card plus a thin top highlight line: `absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent`.
- **Premium tier:** gold spinning conic-gradient halo behind a `bg-slate-950/90` card.
- **Primary buttons:** `bg-accent` or `bg-gradient-to-r from-accent to-sky-400`, `text-slate-950`, `font-bold`, with a moving shine (`animate-shine` on a `bg-white/40 blur-md` strip) and a glow shadow on hover.
- **Outline buttons:** `border border-accent/60 text-accent`, filling with `bg-accent text-slate-950` on hover.

## 4. Shared Components
| Component | File | Purpose |
|---|---|---|
| `AnimatedPage` | `components/AnimatedPage.jsx` | Wraps every page. Fade, lift and blur transition. Adds `relative z-10` so content sits above the background |
| `Reveal` | `components/AnimatedPage.jsx` (named export) | Fades and lifts children in when scrolled into view. Props: `delay`, `className`, `as` |
| `SectionHeading` | `components/SectionHeading.jsx` | Page title with accent word and underline. Props: `accent`, `align` (`center` or `left`), `className` |
| `Aurora` | `components/Aurora.jsx` | Fixed animated background. Rendered once inside `Navbar`. Do not add it to individual pages |
| `Navbar` | `components/Navbar.jsx` | Floating glass bar with a sliding active-link pill (`layoutId="nav-pill"`) |

## 5. Animations & Interactions
- **Page transitions:** every page must be wrapped in `<AnimatedPage>`.
- **Scroll-in:** wrap grid items in `<Reveal delay={i * 0.1}>`. Keep delays under about 0.3s.
- **Hover lift:** cards use `whileHover={{ y: -8 }}` with `transition={{ type: 'spring', stiffness: 300, damping: 20 }}`.
- **Buttons:** `whileHover={{ scale: 1.02-1.05 }}`, `whileTap={{ scale: 0.97 }}`, `transition-all duration-300`, plus a glow.
- **Easing:** `[0.22, 1, 0.36, 1]` for entrances.
- **Tailwind animations available:** `animate-shine`, `animate-spin-slow`, `animate-text-shimmer`, `animate-float`, `animate-glow`, `animate-gradient-x`, `animate-pulse-slow`.
- **Transform conflict:** Framer Motion sets an inline `transform`, which overrides Tailwind `translate-*` classes on the same element. Put offsets such as `md:-translate-y-4` on a plain wrapper `div` around the motion element.
- **Icons:** use `lucide-react` exclusively. `size={24}` inline, `size={32}` to `size={40}` in feature cards.

## 6. Layout
- Pages: `max-w-7xl` container from `AnimatedPage`, with `pt-28` to clear the floating navbar.
- Content blocks: `max-w-4xl` to `max-w-6xl`, centered.
- Mobile first. Grids collapse to one column below `md`.