---
status: pending
title: Hello World app
option: simple-static-page :: Simple static page :: One clean, polished page that displays "Hello, World!".
option: personalized-greeting :: Personalized greeting :: A page with a name field that greets the visitor personally.
option: multi-page-mini-site :: Multi-page mini site :: A home page plus an About page connected by a navigation bar.
recommended: simple-static-page
---

## Common steps

1. Create `package.json` with the project dependencies (React, Vite, TypeScript, TanStack Router, Tailwind CSS v4 via @tailwindcss/vite) and the standard dev/build/preview scripts. Expected outcome: `npm install` installs everything the app needs.
2. Create `vite.config.ts` registering the TanStack Router plugin and the Tailwind CSS plugin, and declaring the `@/` path alias for `src/`. Expected outcome: Vite starts the dev server, routes are file-based, and `@/` imports resolve.
3. Create `tsconfig.json` (and `tsconfig.node.json` if needed) with strict TypeScript settings for a Vite + React app. Expected outcome: `tsc` typechecks the project without errors.
4. Create `index.html` at the project root with a `<div id="root">` mount point and a script tag loading `src/main.tsx`. Expected outcome: the page loads the React app in the browser.
5. Create `src/styles/global.css` starting with exactly `@import "tailwindcss";` and containing the shared base styles (page background, font smoothing, centering layout helpers). Expected outcome: Tailwind utilities are available app-wide.
6. Create `src/main.tsx` that imports `src/styles/global.css` once, builds the TanStack Router instance from the generated route tree, and renders the app into `#root`. Expected outcome: the app mounts and the router takes over rendering.
7. Create `src/routes/__root.tsx` as the app shell rendering the current route's content via the router's outlet. Expected outcome: every route renders inside a consistent shell.
8. Run the dev server and confirm the generated `src/routeTree.gen.ts` exists and the app renders in the browser with no console errors. Expected outcome: a working baseline app.

## Option: Simple static page

1. Create `src/routes/index.tsx` as the home route showing a large, centered "Hello, World!" headline with a short supporting line, styled with Tailwind (generous spacing, soft background, strong typography). Expected outcome: visiting `/` shows a polished hello world page.
2. Add subtle finishing touches in `src/routes/index.tsx` (e.g. a small badge or accent color on the headline) so the page feels designed rather than default. Expected outcome: the page looks intentional on desktop and mobile.

## Option: Personalized greeting

1. Create `src/routes/index.tsx` as the home route with a headline, a text input for the visitor's name, and a greeting area. Expected outcome: visiting `/` shows a greeting form.
2. Add component state in `src/routes/index.tsx` so the greeting updates live as the visitor types, falling back to "Hello, World!" when the field is empty. Expected outcome: typing a name instantly changes the greeting to greet that person.
3. Add light validation and polish (trimmed input, friendly placeholder, input focus styles, an optional "clear" button). Expected outcome: the interaction feels smooth and forgiving.

## Option: Multi-page mini site

1. Create `src/routes/index.tsx` as the home route with the "Hello, World!" hero message and a call-to-action link to the About page. Expected outcome: `/` shows the hello world hero with a working link.
2. Create `src/routes/about.tsx` as the About route with a short paragraph describing the app. Expected outcome: `/about` renders its own page through the router.
3. Add a navigation bar to `src/routes/__root.tsx` with links to Home and About, highlighting the currently active page. Expected outcome: visitors can move between pages, and the nav shows where they are.
