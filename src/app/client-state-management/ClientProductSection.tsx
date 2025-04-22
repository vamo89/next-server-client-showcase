"use client";

import { Products, ProductsSkeleton } from "@/components/Products";
import { useProducts } from "@/hooks/useProducts";

export default function ClientProductSection() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading || !products) {
    return <ProductsSkeleton />;
  }

  if (isError) {
    throw new Error("Failed to fetch products");
  }

  return (
    <Products
      products={products}
      hasLink
      hasCart
      linkBasePath="/client-state-management/product"
    />
  );
}
