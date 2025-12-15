"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useOrder } from '@/context/order-context';
import { menuData, type Tag } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Leaf, Beef, CakeSlice, Soup, Plus, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const tagIcons: Record<Tag, React.ReactNode> = {
  vegetarian: <Leaf className="h-4 w-4 mr-1" />,
  'non-vegetarian': <Beef className="h-4 w-4 mr-1" />,
  sweet: <CakeSlice className="h-4 w-4 mr-1" />,
  savory: <Soup className="h-4 w-4 mr-1" />,
};

const allTags: Tag[] = ['vegetarian', 'non-vegetarian', 'sweet', 'savory'];

const MenuSection = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const { addToOrder, orderItems } = useOrder();
  const { toast } = useToast();

  const handleTagClick = (tag: Tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredMenu = useMemo(() => {
    if (selectedTags.length === 0) {
      return menuData;
    }
    return menuData.filter(dish => 
      selectedTags.every(tag => dish.tags.includes(tag))
    );
  }, [selectedTags]);

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

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-headline text-center text-accent mb-12">Our Menu</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {allTags.map(tag => (
            <Button 
              key={tag}
              variant={selectedTags.includes(tag) ? 'default' : 'outline'}
              onClick={() => handleTagClick(tag)}
              className="capitalize rounded-full transition-all"
            >
              {tagIcons[tag]}
              {tag}
            </Button>
          ))}
          {selectedTags.length > 0 && (
            <Button variant="ghost" onClick={() => setSelectedTags([])}>Clear Filters</Button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.map(dish => {
            const imageData = PlaceHolderImages.find(img => img.id === dish.id);
            const quantity = getItemQuantity(dish.id);
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
                      <Badge key={tag} variant="secondary" className="capitalize flex items-center">{tagIcons[tag]} {tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-6 pt-0">
                  <p className="text-xl font-bold text-accent">₹{dish.price.toFixed(2)}</p>
                  <Button onClick={() => handleAddToOrder(dish)}>
                    {quantity > 0 ? <Check className="mr-2" /> : <Plus className="mr-2" />}
                    {quantity > 0 ? `${quantity} in cart` : 'Add'}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        {filteredMenu.length === 0 && (
          <p className="text-center text-foreground/70 mt-12">No dishes match the selected filters.</p>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
