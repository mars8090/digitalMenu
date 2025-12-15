"use client";
import type { Dish } from '@/lib/data';
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export interface OrderItem extends Dish {
  quantity: number;
}

interface OrderContextType {
  orderItems: OrderItem[];
  addToOrder: (dish: Dish) => void;
  removeFromOrder: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearOrder: () => void;
  totalPrice: number;
  totalItems: number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const addToOrder = useCallback((dish: Dish) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...dish, quantity: 1 }];
    });
  }, []);

  const removeFromOrder = useCallback((dishId: string) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== dishId));
  }, []);
  
  const updateQuantity = useCallback((dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromOrder(dishId);
    } else {
      setOrderItems((prevItems) =>
        prevItems.map((item) =>
          item.id === dishId ? { ...item, quantity } : item
        )
      );
    }
  }, [removeFromOrder]);

  const clearOrder = useCallback(() => {
    setOrderItems([]);
  }, []);

  const totalPrice = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = orderItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <OrderContext.Provider value={{ orderItems, addToOrder, removeFromOrder, updateQuantity, clearOrder, totalPrice, totalItems }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
