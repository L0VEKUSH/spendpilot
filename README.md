# SpendPilot

A Next.js and React project focused on a personal-finance and savings experience.

## Current interface

The home page is composed from reusable landing-page sections:

- **Hero** — primary introduction.
- **Social proof** — credibility section.
- **How it works** — product explanation.
- **Savings preview** — savings-oriented preview.
- **FAQ** — frequently asked questions.
- **Footer** — closing navigation and information.

The page composition is in `app/page.tsx`; the sections are implemented in `components/landing/`.

> This README describes the code currently visible in the repository. It does not claim that account integrations, transaction processing, persistence, or financial calculations are implemented unless those features are present in the source.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Requirements

- Node.js (use a current LTS release)
- npm

## Getting started

Clone the repository and install the locked dependencies:

```bash
git clone https://github.com/L0VEKUSH/spendpilot.git
cd spendpilot
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm start` | Start the production server (after building) |

## Quality checks

Run the same checks used by the repository's GitHub Actions workflow:

```bash
npm ci
npm run lint
npm run build
```

The repository currently exposes lint and build checks. Dedicated unit and integration test suites should be added alongside testable business logic; no test suite is claimed here yet.

## Project structure

```text
app/
  page.tsx                 # Home page composition
components/
  landing/
    hero.tsx
    social-proof.tsx
    how-it-works.tsx
    savings-preview.tsx
    faq.tsx
    footer.tsx
```

The component filenames above reflect the imports used by the home page. Explore the repository for the complete application structure.

## Contributing

1. Create a focused branch.
2. Keep changes small and explain the reasoning.
3. Run lint and production build checks.
4. Include tests when adding or changing testable application logic.
5. Open a pull request with a clear summary and verification steps.

## License

No project-specific license was confirmed during this documentation update. Check the repository's license file before reusing or redistributing this project.
