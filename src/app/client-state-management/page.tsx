import ClientProductSection from "@/app/client-state-management/ClientProductSection";

export default function ClientStateManagementPage() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Shop Our Products</h2>
        <p className="text-gray-600 mb-6">
          Browse our collection and add items to your cart. Your cart will
          persist as you navigate between pages. You can access the product
          pages by clicking on the product image.
        </p>
        <ClientProductSection />
      </div>
    </div>
  );
}
