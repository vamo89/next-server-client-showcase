import { getProducts } from "@/services/api/products";
import { Products, ProductsSkeleton } from "@/components/Products";
import { Suspense } from "react";

async function ProductSection() {
  const products = await getProducts();
  return (
    <Products
      products={products}
      hasLink
      hasCart
      linkBasePath="/client-state-management/product"
    />
  );
}

export default async function ClientStateManagementPage() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Shop Our Products</h2>
        <p className="text-gray-600 mb-6">
          Browse our collection and add items to your cart. Your cart will
          persist as you navigate between pages. You can access the product
          pages by clicking on the product image.
        </p>
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductSection />
        </Suspense>
      </div>
    </div>
  );
}
