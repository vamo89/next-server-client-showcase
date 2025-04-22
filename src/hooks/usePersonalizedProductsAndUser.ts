"use client";

import { useQueries } from "@tanstack/react-query";
import { getPersonalizedProducts } from "@/services/api/products";
import { getUser } from "@/services/api/users";

export const usePersonalizedProductsAndUser = (userId: number = 1) => {
  const results = useQueries({
    queries: [
      {
        // Simulates a query that returns personalized products, so depends on userId
        queryKey: ["products", userId],
        queryFn: () => getPersonalizedProducts(userId),
      },
      {
        queryKey: ["user", userId],
        queryFn: () => getUser(userId),
        enabled: !!userId,
      },
    ],
  });

  const [productsQuery, userQuery] = results;

  return {
    products: productsQuery.data,
    user: userQuery.data,
    isLoading: productsQuery.isLoading || userQuery.isLoading,
    isError: productsQuery.isError || userQuery.isError,
    error: productsQuery.error || userQuery.error,
  };
};
