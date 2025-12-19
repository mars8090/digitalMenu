"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useOrder } from '@/context/order-context';
import { menuData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Plus, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MenuSection = () => {
  const { addToOrder, orderItems } = useOrder();
  const { toast } = useToast();

  const handleAddToOrder = (dish: (typeof menuData)[0]) => {
    addToOrder(dish);
    toast({
      title: "Added to order",
      description: `${dish.name} has been added to your order.`,
    });
  };
  
  const getItemQuantity = (dishId: string) => {
    return orderItems.find(item => item.id === dishId)?.quantity || 0;
  }

  const getPriceText = (dish: (typeof menuData)[0]) => {
    switch (dish.id) {
      case 'khurma':
        return 'per piece';
      case 'bara':
        return 'per piece';
      case 'milk-tea':
        return 'per cup';
      case 'black-coffee':
        return 'per cup';
      case 'chicken-roast':
        return 'per 3 pieces';
      case 'gajar-halwa':
        return 'per serving';
      default:
        return 'per serving';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-headline text-center text-accent mb-12">Our Menu</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuData.map(dish => {
            const imageData = PlaceHolderImages.find(img => img.id === dish.id);
            const quantity = getItemQuantity(dish.id);
            const priceText = getPriceText(dish);

            return (
              <Card key={dish.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={imageData?.imageUrl || "https://picsum.photos/seed/placeholder/600/400"}
                      alt={imageData?.description || dish.name}
                      fill
                      className="object-cover"
                      data-ai-hint={imageData?.imageHint || 'food plate'}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-xl mb-2">{dish.name}</CardTitle>
                  <CardDescription>{dish.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {dish.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-6 pt-0">
                  <div className="text-right">
                    <p className="text-xl font-bold text-accent">Rs.{dish.price.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">{priceText}</p>
                  </div>
                  <Button onClick={() => handleAddToOrder(dish)}>
                    {quantity > 0 ? <Check className="mr-2" /> : <Plus className="mr-2" />}
                    {quantity > 0 ? `${quantity} in cart` : 'Add'}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
