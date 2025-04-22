"use client";

import { Products, ProductsSkeleton } from "@/components/Products";
import { useProductsAndUser } from "@/hooks/useQueries";
import { nameToCamelCase } from "@/utils/nameToCamelCase";

export default function ClientProductSection() {
  const { products, user, isLoading, isError } = useProductsAndUser();

  if (isLoading) {
    return (
      <>
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-medium text-blue-900">Welcome!</h3>
        </div>
        <ProductsSkeleton />
      </>
    );
  }

  if (isError || !products || !user) {
    throw new Error("Failed to fetch data");
  }

  // Format user name based on the available data
  const userName = user.name
    ? `${nameToCamelCase(user.name.firstname)} ${nameToCamelCase(
        user.name.lastname
      )}!`
    : user.username;

  return (
    <div>
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-medium text-blue-900">
          Welcome, {userName}
        </h3>
      </div>

      <Products
        products={products}
        hasLink
        hasCart
        linkBasePath="/client-state-management/product"
      />
    </div>
  );
}
