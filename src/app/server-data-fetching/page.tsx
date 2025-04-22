import { Suspense } from "react";
import { getProducts } from "@/services/api/products";
import { getUser } from "@/services/api/users";
import { Products, ProductsSkeleton } from "@/components/Products";
import { UserProfile, UserProfileSkeleton } from "@/components/UserProfile";

async function UserProfileSection() {
  // Fetch fake user
  const user = await getUser(1);

  return <UserProfile user={user} />;
}

const ProductSectionWrapper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {children}
    </div>
  );
};

async function ProductListSection() {
  // Fetch fake products
  const products = await getProducts();

  return (
    <ProductSectionWrapper title={`Products (${products.length})`}>
      <Products products={products} />
    </ProductSectionWrapper>
  );
}

export default async function ServerDataFetchingPage() {
  return (
    <div className="space-y-10">
      {/* User Profile with Suspense boundary */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">User Profile</h2>
        <Suspense fallback={<UserProfileSkeleton />}>
          <UserProfileSection />
        </Suspense>
      </div>

      {/* Product List with Suspense boundary */}
      <Suspense
        fallback={
          <ProductSectionWrapper title="Products">
            <ProductsSkeleton />
          </ProductSectionWrapper>
        }
      >
        <ProductListSection />
      </Suspense>
    </div>
  );
}
