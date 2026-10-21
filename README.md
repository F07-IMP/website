# FSMT Website

The website for the **Fachschaft Medientechnologie (FSMT)** at TH Köln. It
provides students with a central place for faculty updates, first-semester
information, Fachschaft services, and everyday campus information.

The application is built with the Next.js App Router and React. The interface
and content are primarily in German.

## Features

- Landing page with information cards for FSMT services
- Current news section
- Fachschaft Nextcloud information
- First-semester information
- Questions and answers section
- Dashboard with:
  - The Mensa meal plan
  - KVB public-transport connections from TH Köln Deutz
- Live display of the FSMT room/office door state in the navigation bar

## Tech stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [pnpm](https://pnpm.io/) for package management

## Requirements

- Node.js 20 or newer
- pnpm 11 (the repository declares `pnpm@11.26.0` as its package manager)

## Getting started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The
development server reloads automatically when files change.

## Available commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm lint` | Run ESLint |
| `pnpm build` | Create a production build |
| `pnpm start` | Start the production server after building |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | FSMT landing page |
| `/about-us` | About the Fachschaft |
| `/dashboard` | Meal plan and public-transport information |
| `/news` | Current news |
| `/nextcloud` | Fachschaft cloud information |
| `/first-semester` | Information for first-semester students |
| `/q-a` | Questions and answers |
| `/api/door-state` | Server-sent events endpoint for the door state |

## Door-state integration

The `/api/door-state` endpoint connects to the door-state WebSocket and
forwards updates to the browser as server-sent events. The current WebSocket
address is defined in
[`app/api/door-state/route.ts`](./app/api/door-state/route.ts). The endpoint
expects messages containing a `state` property.

When developing outside the network that hosts the door-state service, the
door-state indicator will report that the service is unavailable. The rest of
the site can still be developed normally.

## Project structure

```text
app/                 Pages, layouts, and API routes
components/          Reusable UI components
lib/                 Shared utilities and hooks
public/               Static images and icons
types/                Shared TypeScript types
```

Most page-level content lives in `app/`, while reusable navigation, hero,
information-card, and meal-plan components live in `components/`.

## Contributing

1. Create a branch for your change.
2. Install dependencies with `pnpm install`.
3. Run `pnpm lint` and, where relevant, `pnpm build`.
4. Keep user-facing text and navigation consistent with the existing German
   interface.
5. Open a pull request with a concise description of the change.

## Deployment

Build the application and start the production server with:

```bash
pnpm build
pnpm start
```

The application can also be deployed to a platform that supports Next.js
server applications. Ensure that the deployment environment can reach the
door-state WebSocket if live door-state updates are required.
