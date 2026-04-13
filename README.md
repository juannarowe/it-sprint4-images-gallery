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
    ├── types/          # TypeScript interfaces
    ├── components/     # React components
    │   ├── Gallery.tsx
    │   └── ImageItem.tsx
    ├── App.tsx
    └── main.tsx
```

## Git Workflow

This project follows a simplified Git Flow:

- `main` — stable, functional code
- `feature/<name>` — one branch per iteration

Commits follow [Conventional Commits](https://www.conventionalcommits.org/) format.
