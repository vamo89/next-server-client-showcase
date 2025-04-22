import { Product } from "@/types/api";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { PRODUCTS_SKELETON_COUNT } from "@/utils/constants";

interface ProductsProps {
  products: Product[];
  hasCart?: boolean;
  hasLink?: boolean;
  linkBasePath?: string;
}

/**
 * Skeleton loader for the Products component
 */
export const ProductsSkeleton = ({
  hasCart = false,
}: Pick<ProductsProps, "hasCart">) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
      {Array.from({ length: PRODUCTS_SKELETON_COUNT }).map((_, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-300 w-full"></div>
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
          {hasCart && (
            <div className="px-4 pb-4">
              <div className="h-10 bg-gray-300 rounded w-full"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/**
 * Server component for rendering product items, used on both pages
 * Add to Cart button is a client component
 */
export const Products = ({
  products,
  hasCart = false,
  hasLink = false,
  linkBasePath = "",
}: ProductsProps) => {
  const ProductWrapper = ({
    children,
    id,
  }: {
    children: React.ReactNode;
    id: number;
  }) =>
    hasLink ? (
      <Link href={`${linkBasePath}/${id}`}>{children}</Link>
    ) : (
      <div>{children}</div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <ProductWrapper id={product.id}>
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h3
                className="font-medium text-green-200 line-clamp-1"
                title={product.title}
              >
                {product.title}
              </h3>
              <p
                className="text-gray-500 text-sm mt-1 line-clamp-2"
                title={product.description}
              >
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold">
                  ${product.price.toFixed(2)}
                </span>
                {product.rating && (
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm font-medium">
                      {product.rating.rate}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating.count})
                    </span>
                  </div>
                )}
              </div>
            </div>
          </ProductWrapper>
          {hasCart && (
            <div className="px-4 pb-4">
              <AddToCartButton product={product} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
