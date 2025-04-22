"use client";

import { ReactNode } from "react";
import { CartIcon } from "@/components/cart/CartIcon";
import { CartSidebar } from "@/components/cart/CartSidebar";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      {children}
      <CartIcon />
      <CartSidebar />
    </div>
  );
};
