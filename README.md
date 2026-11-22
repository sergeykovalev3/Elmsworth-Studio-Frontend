# Elmsworth Studio Frontend

Public website for a landscape design studio. Visitors can browse projects, explore services, read journal entries, and send a consultation request.

Built with React, TypeScript, Vite, TanStack Router, and TanStack Query.

## Run locally

Use Node.js 22.12 or later. Start the [API and studio cabinet](https://github.com/sergeykovalev3/Elmsworth-Studio-Backend) first.

~~~sh
npm ci
npm run dev
~~~

Open [the storefront](http://localhost:5173). Vite forwards API requests to port 3001. Set API_PROXY in the shell before starting Vite to use a different API address.

## Verify changes

~~~sh
npm test
npm run lint
npm run build
~~~

The build writes the static site to dist. For a hosted copy, configure the host to serve index.html for client-side routes and forward /api requests to the backend.
