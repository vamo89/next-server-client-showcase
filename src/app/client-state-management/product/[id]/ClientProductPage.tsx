"use client";

import {
  ProductDetail,
  ProductDetailSkeleton,
} from "@/components/ProductDetail";
import { useProduct } from "@/hooks/useProducts";

interface ClientProductPageProps {
  productId: number;
}

export default function ClientProductPage({
  productId,
}: ClientProductPageProps) {
  const { data: product, isLoading, isError, error } = useProduct(productId);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError || !product) {
    throw new Error("Failed to fetch product");
  }

  return <ProductDetail product={product} />;
}
