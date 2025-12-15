export type Tag = 'Vegetarian' | 'Non-Vegetarian' | 'Sweet' | 'Savory' | 'Fried' | 'Gluten-Free' | 'Hot' | 'Beverage';

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: Tag[];
}

export const menuData: Dish[] = [
  {
    id: 'khurma',
    name: 'Khurma',
    description: 'Crispy, sweet fried pastry made with flour, milk, and sugar, twisted into delicate shapes and deep-fried to golden perfection.',
    price: 15,
    tags: ['Vegetarian', 'Sweet', 'Fried'],
  },
  {
    id: 'bara',
    name: 'Bara',
    description: 'Savory lentil pancakes made from ground black lentils, seasoned with herbs and spices, served with traditional accompaniments.',
    price: 20,
    tags: ['Vegetarian', 'Savory', 'Gluten-Free'],
  },
  {
    id: 'milk-tea',
    name: 'Milk Tea',
    description: 'Premium black tea leaves brewed with fresh milk and a hint of aromatic spices, creating a rich and comforting beverage.',
    price: 25,
    tags: ['Vegetarian', 'Hot', 'Beverage'],
  },
  {
    id: 'black-coffee',
    name: 'Black Coffee',
    description: 'Single-origin coffee beans, freshly ground and brewed to extract full-bodied flavor with rich aroma and subtle acidity.',
    price: 30,
    tags: ['Vegetarian', 'Hot', 'Beverage'],
  },
  {
    id: 'chicken-roast',
    name: 'Chicken Roast',
    description: 'Tender chicken marinated in traditional spices, roasted slowly to achieve crispy skin and juicy, flavorful meat.',
    price: 150,
    tags: ['Non-Vegetarian', 'Savory'],
  },
  {
    id: 'gajar-halwa',
    name: 'Gajar Halwa',
    description: 'Slow-cooked carrot pudding made with fresh carrots, milk, ghee, and dried fruits, garnished with nuts and edible silver leaf.',
    price: 120,
    tags: ['Vegetarian', 'Sweet'],
  },
];
