# Image Gallery

A responsive image gallery built with React and TypeScript as part of a frontend development course (IT Academy – Sprint 4).

## Features

- Responsive image grid
- Featured image (first position highlighted)
- Individual image deletion with confirmation
- Multiple selection and batch deletion
- Drag-and-drop reordering

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

## Git Workflow

This project follows a simplified Git Flow:

- `main` — stable, functional code
- `feature/<name>` — one branch per iteration

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) format.
