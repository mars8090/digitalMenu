"use client";

import { OrderProvider } from "@/context/order-context";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OrderProvider>
      {children}
      <Toaster />
    </OrderProvider>
  );
}
