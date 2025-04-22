"use client";

import { Product } from "@/types/api";
import { useCartStore } from "@/stores/useCartStore";
import { useState } from "react";

interface AddToCartFormProps {
  product: Product;
}

export default function AddToCartForm({ product }: AddToCartFormProps) {
  const { addItem, openCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
    openCart();
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity));
  };

  return (
    <>
      <div className="flex items-center mb-4">
        <span className="mr-4 text-gray-700">Quantity:</span>
        <div className="flex items-center border rounded">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-4 text-gray-700">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-md transition-colors"
        aria-label={`Add ${product.title} to cart`}
      >
        Add to Cart
      </button>
    </>
  );
}
