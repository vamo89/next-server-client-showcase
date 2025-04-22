import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold mb-4">
            Next.js Server-Client Showcase
          </h1>
          <p className="mb-6 text-gray-600">
            A demonstration project showcasing Next.js 15 and React 19 features,
            focusing on server and client components.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          <Link
            href="/server-data-fetching"
            className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
          >
            <h2 className="text-xl font-semibold mb-2 text-green-600">
              Server Data Fetching
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Demonstrates parallel data fetching with server components using
              Suspense and Error boundaries.
            </p>
            <span className="text-blue-600 flex items-center">
              View Demo
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>

          <Link
            href="/client-state-management"
            className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
          >
            <h2 className="text-xl font-semibold mb-2 text-green-600">
              Client State Management
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Client components with Zustand store and state persistence across
              routes. Features a shopping cart example.
            </p>
            <span className="text-blue-600 flex items-center">
              View Demo
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span className="text-sm text-gray-500">Victor Oliveira</span>
      </footer>
    </div>
  );
}
