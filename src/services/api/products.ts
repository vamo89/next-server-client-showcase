import { Product } from "@/types/api";
import { BASE_URL, PRODUCTS_REVALIDATE_TIME_SECONDS } from "@/utils/constants";

/**
 * Fetches all products from the API
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      // Next.js 15 cache settings
      next: {
        revalidate: PRODUCTS_REVALIDATE_TIME_SECONDS,
        tags: ["products"],
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
