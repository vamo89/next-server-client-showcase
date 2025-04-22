# Next.js Server-Client Showcase

A demonstration project showcasing Next.js 15 and React 19 features, focusing on server and client components, parallel data fetching, and state management with zustand.

**Live Demo:** [https://next-server-client-showcase.vercel.app/](https://next-server-client-showcase.vercel.app/)

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

**Demo:** Visit [/server-data-fetching](https://next-server-client-showcase.vercel.app/server-data-fetching). Since data fetching happens on the server, you can inspect the network tab to confirm no client-side data fetching occurs after the initial page load. Locally, you can see independent Suspense boundaries in action.

### Client-Side State Management

- Client components with Zustand store
- State persistence across routes
- Optimized navigation with Next.js Link prefetching
- React Query for data fetching and caching

**Demos:**

- [/client-state-management](https://next-server-client-showcase.vercel.app/client-state-management) - Demonstrates a case where both products and user data must be loaded together, as personalized products for example, before displaying content (showcasing coordinated loading states for interdependent data)
- [/client-state-management/product/222](https://next-server-client-showcase.vercel.app/client-state-management/product/222) - Experience React Query's auto retry mechanism and error boundary when fetching an invalid product

## 🏗️ Project Structure

```
src/
├── app/                            # Next.js app directory
│   ├── layout.tsx                  # Root layout with React Query provider
│   ├── page.tsx                    # Home page
│   ├── providers.tsx               # React Query provider setup
│   ├── server-data-fetching/       # Server components showcase
│   └── client-state-management/    # Client components showcase
├── components/                     # Shared UI components
│   ├── cart/                       # Cart-related components
│   ├── Products.tsx                # Products grid with skeleton
│   ├── ProductDetail.tsx           # Product detail with skeleton
│   └── UserProfile.tsx             # User profile with skeleton
├── hooks/                          # React Query hooks
│   ├── useProducts.ts              # Product data hooks
│   ├── useQueries.ts               # Combined hooks
│   └── useUsers.ts                 # User data hooks
├── services/                       # API service functions
│   └── api/                        # API endpoints
├── stores/                         # Zustand store
│   └── useCartStore.ts             # Cart state with persistence
├── utils/                          # Utility functions
└── types/                          # TypeScript definitions
```

## Key Implementation Details

- **Server Components**: Server-side rendering with data fetching during the server rendering process
- **Client-side Data Fetching**: React Query for efficient data fetching with proper loading and error states
- **State Management**: Zustand store with persistence for cart functionality
- **Loading States**: Skeleton loaders throughout the application for improved UX
- **Error Handling**: Proper error boundaries for graceful error handling

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

## Technical Highlights

- **Server Components**: Leveraging server-rendered React components to reduce client-side JavaScript, improve initial load performance, and enable direct backend access without API layers
- **React Query Integration**: Client components leverage React Query for efficient data fetching and caching
- **Zustand Persistence**: Cart state persists across page navigation and browser refreshes
- **TypeScript Safety**: Fully typed components, hooks, and state management
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
