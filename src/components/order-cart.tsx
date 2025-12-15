"use client";
import { useState } from 'react';
import { ShoppingCart, X, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOrder } from '@/context/order-context';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { OrderConfirmationDialog } from './order-confirmation-dialog';
import { ScrollArea } from './ui/scroll-area';

const OrderCart = () => {
  const { orderItems, removeFromOrder, updateQuantity, totalPrice, totalItems, clearOrder } = useOrder();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    setIsConfirming(false);
    setIsSheetOpen(false);
    clearOrder();
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button className="fixed bottom-6 right-6 z-50 rounded-full h-16 w-16 shadow-2xl animate-in fade-in zoom-in-90 duration-300">
            <ShoppingCart className="h-7 w-7" />
            <span className="sr-only">Open Cart</span>
            <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-xs font-bold">
              {totalItems}
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle>Your Order</SheetTitle>
          </SheetHeader>
          {orderItems.length > 0 ? (
            <>
              <ScrollArea className="flex-grow my-4 -mx-6">
                <div className="px-6">
                  {orderItems.map(item => {
                    const imageData = PlaceHolderImages.find(img => img.id === item.id);
                    return (
                      <div key={item.id} className="flex items-start gap-4 py-4 border-b">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={imageData?.imageUrl || "https://picsum.photos/seed/placeholder/100/100"}
                            alt={imageData?.description || item.name}
                            fill
                            className="object-cover"
                            data-ai-hint={imageData?.imageHint || 'food dish'}
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Rs.{item.price.toFixed(2)}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span>{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromOrder(item.id)}>
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </ScrollArea>
              <SheetFooter className="mt-auto">
                <div className="w-full space-y-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>Rs.{totalPrice.toFixed(2)}</span>
                  </div>
                  <Button size="lg" className="w-full" onClick={() => setIsConfirming(true)}>Place Order</Button>
                </div>
              </SheetFooter>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Your cart is empty.</p>
              <Button variant="link" onClick={() => setIsSheetOpen(false)}>Start ordering</Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <OrderConfirmationDialog 
        open={isConfirming} 
        onOpenChange={setIsConfirming}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default OrderCart;
