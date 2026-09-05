# Portfolio

Hey! 👋  
This is my personal portfolio site built with React, Vite, and Tailwind CSS.

## Two versions, one app

The top navigation switches between both portfolio designs. It slides down when the cursor reaches the top edge or a navigation link receives keyboard focus, then hides when the user leaves it. On touch devices it stays visible.

- **V1 Classic** (`/v1`): the original `main` branch portfolio, including its pages and light/dark theme.
- **V2 Desktop** (`/v2`): the `V2` branch desktop interface, including its apps, windows, and dock.

First-time visitors to `/` see V2. The browser remembers the last version visited; explicit version URLs always take precedence. Switching also works if browser storage is blocked. Original links such as `/projects` redirect to `/v1/projects`.

V1 lives in `src/versions/v1`, with original assets under `public/v1`. V2's entry point is `src/versions/v2/App.jsx`, using the existing apps, components, and configuration. Each version loads on demand. Theme and layout styles are scoped to avoid interference; each version keeps its original resume.

## Development

```sh
npm install
npm run dev
npm test
npm run build
```

The route smoke tests render both versions, verify V1 page content and referenced assets, and check version preference behavior when storage is available or blocked.

## Deployment

Deploy the single `dist` build. `vercel.json` enables SPA routing on Vercel so version URLs and nested pages work when opened directly or refreshed. On other hosts, configure a fallback to `index.html` for routes that do not match a static file.
