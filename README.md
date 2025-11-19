# de-occidente-website

Responsive React + TypeScript web app for Cooperativa de Occidente showcasing bus routes, destination guides, and service bookings with a streamlined route finder and marketing content.

## Getting started

**Prerequisites**

- [Node.js](https://nodejs.org/) 18+

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router DOM

## Project structure

```
src/
  components/    # Reusable UI components
  data/          # Static content and configuration
  pages/         # Top-level routed screens
  screens/       # Legacy static screen implementations
static/          # Images, video, and other assets served as-is
```

## Available scripts

- `npm run dev` – start development server
- `npm run build` – generate production build
- `npm run preview` – preview the production build locally
