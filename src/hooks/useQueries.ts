"use client";

import { useQueries } from "@tanstack/react-query";
import { getProducts } from "@/services/api/products";
import { getUser } from "@/services/api/users";

export const useProductsAndUser = (userId: number = 1) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["products"],
        queryFn: getProducts,
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
