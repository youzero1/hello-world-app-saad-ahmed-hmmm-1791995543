---
status: implemented
title: Hello World app
option: clean-light-theme :: Clean light theme :: A bright, minimal page with airy spacing and soft neutrals.
option: sleek-dark-theme :: Sleek dark theme :: A dark, modern page with a glowing accent color.
option: playful-gradient-theme :: Playful gradient theme :: A bold, colorful page with vibrant gradients and decorative shapes.
option: built-in-theme-switcher :: Built-in theme switcher :: One page with a picker to switch between light, dark, and playful themes.
recommended: built-in-theme-switcher
selected: clean-light-theme
---

## Common steps

1. Create `package.json` with the project dependencies (React, Vite, TypeScript, TanStack Router, Tailwind CSS v4 via @tailwindcss/vite) and the standard dev/build/preview scripts. Expected outcome: `npm install` installs everything the app needs.
2. Create `vite.config.ts` registering the TanStack Router plugin and the Tailwind CSS plugin, and declaring the `@/` path alias for `src/`. Expected outcome: Vite starts the dev server, routes are file-based, and `@/` imports resolve.
3. Create `tsconfig.json` (and `tsconfig.node.json` if needed) with strict TypeScript settings for a Vite + React app. Expected outcome: `tsc` typechecks the project without errors.
4. Create `index.html` at the project root with a `<div id="root">` mount point and a script tag loading `src/main.tsx`. Expected outcome: the page loads the React app in the browser.
5. Create `src/styles/global.css` starting with exactly `@import "tailwindcss";` and containing the shared base styles (font smoothing, full-height layout). Expected outcome: Tailwind utilities are available app-wide.
6. Create `src/main.tsx` that imports `src/styles/global.css` once, builds the TanStack Router instance from the generated route tree, and renders the app into `#root`. Expected outcome: the app mounts and the router takes over rendering.
7. Create `src/routes/__root.tsx` as the app shell rendering the current route's content via the router's outlet. Expected outcome: every route renders inside a consistent shell.
8. Create `src/routes/index.tsx` as the home route with the page structure: a small badge, a large centered "Hello, World!" headline, and a short supporting line. Expected outcome: visiting `/` shows the hello world content, ready for theming.
9. Run the dev server and confirm the generated `src/routeTree.gen.ts` exists and the app renders in the browser with no console errors. Expected outcome: a working baseline page before theme styling.

## Option: Clean light theme

1. Style `src/routes/index.tsx` with a soft off-white background, dark text, generous spacing, and a single calm accent color on the badge and headline highlight. Expected outcome: the page feels bright, minimal, and airy.
2. Add light-theme finishing touches in `src/routes/index.tsx` (a subtle card or soft shadow behind the headline, gentle border tones). Expected outcome: the page looks polished on desktop and mobile.

## Option: Sleek dark theme

1. Style `src/routes/index.tsx` with a near-black background, light text, and one glowing accent color (e.g. cyan or indigo) for the badge and headline highlight. Expected outcome: the page has a modern dark look.
2. Add dark-theme finishing touches in `src/routes/index.tsx` (a soft radial glow behind the headline, subtle ring/border highlights). Expected outcome: the page feels sleek without hurting readability.

## Option: Playful gradient theme

1. Style `src/routes/index.tsx` with a vibrant multi-color gradient background, bold oversized typography, and a contrasting badge. Expected outcome: the page feels energetic and fun.
2. Add playful decorations in `src/routes/index.tsx` (blurred color blobs or simple shapes floating behind the content). Expected outcome: the page has personality while keeping the headline clearly readable.

## Option: Built-in theme switcher

1. Define three named themes (clean light, sleek dark, playful gradient) in `src/styles/global.css` using CSS custom properties scoped to a `data-theme` attribute on the root element, and map the page's colors to those variables. Expected outcome: changing one attribute re-themes the whole page.
2. Create `src/components/ThemeSwitcher.tsx` with a small picker (three labeled buttons or a segmented control) that sets the active theme. Expected outcome: visitors can switch themes with one click.
3. Add theme state to `src/routes/index.tsx`: apply the chosen theme via the `data-theme` attribute, render the `ThemeSwitcher`, and persist the choice in `localStorage` so it survives reloads. Expected outcome: the selected theme is remembered between visits.
4. Add a smooth color transition in `src/styles/global.css` so switching themes animates gently instead of snapping. Expected outcome: theme changes feel polished.
