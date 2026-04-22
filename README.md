# Todo App

A compact and efficient Todo application built with Next.js 15, Redux Toolkit, and MUI v6.

## Features

- **Task Management**: Create, toggle, and manage tasks with ease.
- **Persistence**: State is persisted across sessions using `redux-persist` (localStorage).
- **Date Picking**: Integrated MUI X Date Pickers for task deadlines.
- **Modern UI**: Polished dark-themed interface using MUI v6 with CSS variables.
- **Validation**: Form validation powered by `react-hook-form` and `yup`.

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [Redux Persist](https://github.com/rt2zz/redux-persist)
- **UI Components**: [MUI v6](https://mui.com/material-ui/)
- **Styling**: MUI System with CSS variables and custom variants.
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Dates**: [date-fns](https://date-fns.org/)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Lint

- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Architecture

- `src/store/`: Redux slices and store configuration.
- `src/theme/`: MUI theme configuration, including custom variants and palette.
- `src/components/`: Reusable UI components.
- `src/types/`: TypeScript interfaces and types.
- `src/app/`: Next.js App Router pages and layouts.

## Conventions

- **State**: Use `useAppDispatch` and `useAppSelector` for typed Redux access.
- **Styles**: Prefer `sx` prop or theme variants over raw CSS.
- **Dates**: All dates are stored as strings in `yyyy-MM-dd` format.
