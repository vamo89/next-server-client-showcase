import { notFound } from "next/navigation";
import ClientProductPage from "@/app/client-state-management/product/[id]/ClientProductPage";
import Link from "next/link";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id);

  if (isNaN(productId)) {
    notFound();
  }

  return (
    <>
      <div className="mb-8">
        <Link
          href="/client-state-management"
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
          Back to Products
        </Link>
      </div>
      <ClientProductPage productId={productId} />
    </>
  );
}
