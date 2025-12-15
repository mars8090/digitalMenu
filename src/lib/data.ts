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
    id: 'pasta-aglio-e-olio',
    name: 'Pasta Aglio e Olio',
    description: 'A classic Italian dish of garlic, olive oil, and parsley, served with spaghetti.',
    price: 350,
    tags: ['vegetarian', 'savory'],
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    description: 'A simple yet delicious pizza with fresh tomatoes, mozzarella, and basil.',
    price: 450,
    tags: ['vegetarian', 'savory'],
  },
  {
    id: 'grilled-chicken',
    name: 'Grilled Chicken Steak',
    description: 'Juicy grilled chicken breast served with mashed potatoes and sauteed vegetables.',
    price: 550,
    tags: ['non-vegetarian', 'savory'],
  },
  {
    id: 'chocolate-lava-cake',
    name: 'Chocolate Lava Cake',
    description: 'A decadent chocolate cake with a molten chocolate center, served with vanilla ice cream.',
    price: 250,
    tags: ['vegetarian', 'sweet'],
  },
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    description: 'Cubes of paneer marinated in spices and grilled in a tandoor.',
    price: 380,
    tags: ['vegetarian', 'savory'],
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Tender chicken in a mildly spiced tomato sauce.',
    price: 480,
    tags: ['non-vegetarian', 'savory'],
  },
  {
    id: 'lemon-tart',
    name: 'Lemon Tart',
    description: 'A buttery crust filled with tangy lemon curd.',
    price: 220,
    tags: ['vegetarian', 'sweet'],
  },
  {
    id: 'vegetable-biryani',
    name: 'Vegetable Biryani',
    description: 'Aromatic basmati rice cooked with mixed vegetables and fragrant spices.',
    price: 400,
    tags: ['vegetarian', 'savory'],
  }
];
