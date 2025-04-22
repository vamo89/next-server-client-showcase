"use client";

import { Product } from "@/types/api";
import Image from "next/image";
import AddToCartForm from "@/components/cart/AddToCartForm";

interface ProductDetailProps {
  product: Product;
}

export const ProductDetailSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
          <div className="relative h-80 w-full">
            <div className="h-80 bg-gray-300 w-full"></div>
          </div>
        </div>
        <div className="md:w-1/2 p-6 flex flex-col">
          <div className="h-7 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-7 bg-gray-300 rounded w-1/6 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
          <div className="relative h-80 w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="md:w-1/2 p-6 flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {product.title}
          </h1>

          {product.rating && (
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-sm font-medium">
                  {product.rating.rate}
                </span>
              </div>
              <span className="text-xs text-gray-500 ml-1">
                ({product.rating.count} reviews)
              </span>
            </div>
          )}

          <div className="text-2xl font-bold text-gray-900 mb-4">
            ${product.price.toFixed(2)}
          </div>

          <div className="mb-6">
            <span className="text-sm text-gray-500">
              Category: {product.category}
            </span>
          </div>

          <p className="text-gray-700 mb-8">{product.description}</p>

          <div className="mt-auto">
            <AddToCartForm product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};
