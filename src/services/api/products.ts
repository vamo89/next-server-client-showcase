import { Product } from "@/types/api";
import {
  BASE_URL,
  PRODUCTS_REVALIDATE_TIME_SECONDS,
  SINGLE_PRODUCT_REVALIDATE_TIME_SECONDS,
} from "@/utils/constants";

/**
 * Fetches all products from the API
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      next: {
        revalidate: PRODUCTS_REVALIDATE_TIME_SECONDS,
        tags: ["products"],
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }

    await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

/**
 * Fetches a single product by ID
 */
export async function getProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      next: {
        revalidate: SINGLE_PRODUCT_REVALIDATE_TIME_SECONDS,
        tags: [`product-${id}`],
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch product with ID ${id}: ${response.status}`
      );
    }

    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));

    return response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
}
