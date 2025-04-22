import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Server Data Fetching - NextJS Showcase",
  description: "Demonstrates server components with parallel data fetching",
};

export default function ServerDataFetchingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-2">Server Data Fetching</h1>
      <p className="text-gray-600 mb-8">
        This page demonstrates server components with parallel data fetching
        from multiple APIs.
      </p>

      {children}
    </div>
  );
}
