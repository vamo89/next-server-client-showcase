import type { Metadata } from "next";
import Link from "next/link";
import { CartProvider } from "@/components/cart/CartProvider";

export const metadata: Metadata = {
  title: "Client State Management - NextJS Showcase",
  description:
    "Demonstrates client components with Zustand store and state persistence",
};

export default function ClientStateManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
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

        <h1 className="text-3xl font-bold mb-2">Client State Management</h1>
        <p className="text-gray-600 mb-8">
          This page demonstrates client components with Zustand store and state
          persistence across routes.
        </p>

        {children}
      </div>
    </CartProvider>
  );
}
