export type Tag = 'vegetarian' | 'non-vegetarian' | 'sweet' | 'savory';

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: Tag[];
}

export const menuData: Dish[] = [
  {
    id: 'batuk',
    name: 'Batuk (Veg)',
    description: 'Crispy lentil fritters, a traditional Nepali snack.',
    price: 150,
    tags: ['vegetarian', 'savory'],
  },
  {
    id: 'veg-momo',
    name: 'MOMO (VEG)',
    description: 'Steamed vegetable dumplings served with a tangy dipping sauce.',
    price: 200,
    tags: ['vegetarian', 'savory'],
  },
  {
    id: 'yomari',
    name: 'Yomari (VEG)',
    description: 'Steamed rice flour dumplings filled with sweet molasses and sesame seeds.',
    price: 250,
    tags: ['vegetarian', 'sweet'],
  },
  {
    id: 'masala-tea',
    name: 'Masala Tea',
    description: 'Aromatic and spiced Indian tea with milk.',
    price: 80,
    tags: ['vegetarian', 'sweet'],
  },
  {
    id: 'filter-coffee',
    name: 'Filter Coffee',
    description: 'Classic South Indian style filter coffee.',
    price: 120,
    tags: ['vegetarian', 'sweet'],
  },
];
