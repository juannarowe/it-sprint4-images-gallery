# Image Gallery

A responsive image gallery built with React and TypeScript as part of a frontend development course (IT Academy – Sprint 4).

## Features

- Responsive image grid (2 columns mobile / 4 tablet / 5 desktop)
- Featured image: first image spans 2×2 grid cells on desktop
- Individual image deletion with confirmation
- Multiple selection and batch deletion
- Drag-and-drop reordering
- Accessible markup with ARIA roles and labels

## Tech Stack

- [React](https://react.dev) — UI library
- [TypeScript](https://www.typescriptlang.org) — static typing
- [Vite](https://vitejs.dev) — build tool
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- [shadcn/ui](https://ui.shadcn.com) — UI components
- [dnd-kit](https://dndkit.com) — drag-and-drop
- [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/react) — testing

## Getting Started

```bash
# Clone the repository
git clone https://github.com/juannarowe/it-sprint4-images-gallery.git
cd it-sprint4-images-gallery/image-gallery

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests |
| `npm run test:coverage` | Run tests with coverage report |

## Project Structure

```
image-gallery/
└── src/
    ├── types/              # TypeScript interfaces
    │   └── image.ts
    ├── data/               # Static data
    │   └── images.ts
    ├── components/         # React components
    │   ├── ui/             # shadcn/ui components
    │   │   └── button.tsx
    │   ├── Gallery.tsx
    │   ├── Gallery.test.tsx
    │   ├── ImageItem.tsx
    │   └── ImageItem.test.tsx
    ├── App.tsx
    └── main.tsx
```

## Testing

Tests are written with [Vitest](https://vitest.dev) and [React Testing Library](https://testing-library.com/react).

```bash
npm test                 # run tests in watch mode
npm run test:coverage    # run tests with coverage report
```

Coverage targets: Statements >80%, Lines >80%, Functions >80%.

## Exercise Background

This project is part of **IT Academy – Sprint 4**, a frontend development bootcamp.

Each iteration adds a new layer on top of the previous one:

| Branch | Exercise |
|--------|----------|
| `main` | Exercise 3 — Base gallery: grid, deletion, multi-select, drag-and-drop |
| `feature/stylerefactor` | Exercise 4 — Styling with Tailwind CSS and shadcn/ui |

### Exercise 4 — Styling the Image Gallery (`feature/stylerefactor`)

The goal of this exercise is to apply modern styling approaches using Tailwind CSS (utility-first) and shadcn/ui components.

**What was implemented:**
- Centered layout with a max tablet-width container (`max-w-3xl mx-auto`)
- Responsive grid: 2 columns (mobile) → 4 columns (tablet) → 5 columns (desktop)
- Featured first image: spans 2×2 grid cells on desktop only
- Accessible markup: `role="region"`, `aria-label` on the gallery container and featured image

## Git Workflow

This project follows a simplified Git Flow:

- `main` — stable, functional code
- `feature/<name>` — one branch per iteration

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) format.
