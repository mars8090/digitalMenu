"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useOrder } from "@/context/order-context";
import { Phone } from "lucide-react";

export function OrderConfirmationDialog({ open, onOpenChange, onConfirm }: { open: boolean, onOpenChange: (open: boolean) => void, onConfirm: () => void }) {
  const { totalPrice } = useOrder();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Your Order</AlertDialogTitle>
          <AlertDialogDescription>
            You are about to place an order totaling <strong>₹{totalPrice.toFixed(2)}</strong>.
            Please call the restaurant to finalize your order after confirmation. The restaurant will prepare your order upon receiving your call.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <a href="tel:9867938198" onClick={onConfirm}>
              <Phone className="mr-2 h-4 w-4" />
              Confirm & Call
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
