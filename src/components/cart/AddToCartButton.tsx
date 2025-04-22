"use client";

import { Product } from "@/types/api";
import { useCartStore } from "@/stores/useCartStore";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export default function AddToCartButton({
  product,
  quantity = 1,
}: AddToCartButtonProps) {
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = () => {
    addItem(product, quantity);
    openCart();
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-md transition-colors"
      aria-label={`Add ${product.title} to cart`}
    >
      Add to Cart
    </button>
  );
}
