# Next.js Server-Client Showcase

A demonstration project showcasing Next.js 15 and React 19 features, focusing on server and client components, parallel data fetching, and state management with zustand.

## 🚀 Overview

This project implements two key features to demonstrate proficiency with Next.js 15 and React 19:

1. **Server data fetching**: Server Components & parallel data fetching
2. **Client state management**: Client Components & state management with optimized navigation

## 🛠️ Tech Stack

- Next.js 15 (App Router)
- React 19 + Hooks
- TypeScript 5
- Tailwind CSS 4
- Zustand 5 (client state)
- @tanstack/react-query 5

## 📋 Features

### Server-Side Data Fetching

- Parallel requests with caching
- Suspense boundaries with loading UI
- ErrorBoundary with user-friendly fallback

### Client-Side State Management

- Client components with Zustand store
- State persistence across routes
- Optimized navigation with Next.js Link prefetching

## 🏗️ Project Structure

```
src/
├── app/                            # Next.js app directory
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   ├── server-data-fetching/       # Server components showcase
│   └── client-state-management/    # Client components showcase
├── components/                     # Shared UI components
├── utils/                          # Utility functions
├── stores/                         # Zustand store
└── types/                          # TypeScript definitions
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/vamo89/next-server-client-showcase
   cd next-server-client-showcase
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser
