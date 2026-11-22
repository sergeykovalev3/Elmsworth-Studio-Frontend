<div align="center">
  <img src="public/logo.svg" width="220" alt="Elmsworth Studio">
  <h1>Elmsworth Studio Frontend</h1>
  <p>A landscape studio website for exploring projects, reading the journal, and booking a consultation.</p>
  <p>
    <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&amp;logo=typescript&amp;logoColor=white">
    <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&amp;logo=vite&amp;logoColor=white">
    <img alt="TanStack Router and Query" src="https://img.shields.io/badge/TanStack_Router_%26_Query-FF4154?style=for-the-badge&amp;logo=reactquery&amp;logoColor=white">
  </p>
  <p><a href="https://github.com/sergeykovalev3/Elmsworth-Studio-Backend">Explore the API and studio cabinet →</a></p>
</div>

## Explore the site

| | Experience |
| --- | --- |
| 🌿 **Services** | Explore landscape design, outdoor living, and garden maintenance. |
| 🏡 **Projects** | Browse completed work and open individual project stories and galleries. |
| 📓 **Journal** | Read studio articles served by the same API as the project catalog. |
| ✉️ **Consultation** | Send an inquiry from the site. It appears in the staff cabinet. |

## Run locally

Use Node.js **22.12+**. Start the [API and studio cabinet](https://github.com/sergeykovalev3/Elmsworth-Studio-Backend), then run:

~~~sh
npm ci
npm run dev
~~~

Open [localhost:5173](http://localhost:5173). Vite forwards requests under /api to port 3001. Set API_PROXY in your shell before starting Vite to use a different API address.

## Checks

~~~sh
npm test
npm run lint
npm run build
~~~

The build outputs a static site in **dist/**. For hosting, serve index.html for client-side routes and forward /api to the backend.
