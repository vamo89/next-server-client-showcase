"use client";

import { useEffect } from "react";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 rounded-lg border border-red-200 bg-red-50">
      <h2 className="text-xl font-semibold text-red-700 mb-4">
        Something went wrong!
      </h2>
      <p className="text-red-600 mb-4">
        {error.message || "An error occurred while fetching data"}
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
