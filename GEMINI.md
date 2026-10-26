# DPP Portfolio Agent Guidelines

## UI & Design System Instructions
Before creating, generating, or modifying any UI components or pages, **always read `DESIGN.md` in the project root**.

### Summary of Core Design System Rules:
1. **Color Palette:**
   - **Background:** `#05070f` (`bg-ink`), drawn by the shared `<Aurora />` component. Solid fills use `#0f172a` (`bg-dark` or `bg-slate-900`). Dark-mode-first only; avoid bright white backgrounds.
   - **Primary Accent:** Teal `#2dd4bf` (`text-accent`, `bg-accent`) for primary buttons, active links, and highlights.
   - **Secondary Accent:** Gold `#fbbf24` (`text-gold`, `border-gold`) for badges, review stars, and the premium tier.
   - **Text:** `text-slate-300` / `text-slate-400` for body copy. Reserve pure white (`text-white`) for headings.

2. **Typography:**
   - **Font:** `Inter` (sans-serif).
   - **Headings:** Bold/extrabold with tight tracking (`tracking-tight`).
   - **Page titles:** Use `<SectionHeading accent="Word">Plain words</SectionHeading>` instead of hand-written `<h2>` titles.
   - **Gradients:** Large hero headings use text gradients (`bg-clip-text text-transparent bg-gradient-to-r from-accent via-sky-300 to-blue-400`), optionally with `animate-text-shimmer`.

3. **Components & Borders:**
   - **Cards:** Glass style: `bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/10`. Inner panels and inputs use `rounded-xl` or `rounded-2xl`.
   - **Hover States:** Cards lift (`whileHover={{ y: -8 }}`), the border brightens with `hover:border-accent/60`, and a soft teal glow appears (`hover:shadow-[0_20px_60px_-15px_rgba(45,212,191,0.35)]`).
   - **Inputs:** `bg-slate-950/60 border border-white/10 rounded-xl p-3.5`, with an accent border and soft ring on focus.

4. **Animations & Interactions:**
   - **Page Transitions:** All pages must be wrapped in the Framer Motion `<AnimatedPage>` component.
   - **Scroll-in:** Wrap grid items in `<Reveal delay={i * 0.1}>` (named export from `AnimatedPage.jsx`).
   - **Background:** `<Aurora />` is rendered once inside `Navbar`. Do not add it to pages.
   - **Buttons:** Smooth transitions (`transition-all duration-300`), `whileHover` scale of 1.02 to 1.05, `whileTap` scale of 0.97, a glow shadow, and the `animate-shine` strip on primary buttons.
   - **Transform conflict:** Framer Motion's inline `transform` overrides Tailwind `translate-*` on the same element. Put offsets on a plain wrapper `div`.
   - **Icons:** Exclusively use `lucide-react` icons (`size={24}` for inline text, `size={32}`–`size={40}` for cards/features).

5. **Content and logic:** Design changes must not alter page text, routes, state, or `../api` calls unless the task says so.