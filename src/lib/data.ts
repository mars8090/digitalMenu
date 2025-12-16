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
    description: 'मैदा, दूध, चिनी र घिउ प्रयोग गरी बनाइएको परम्परागत कुरकुरे मीठो खुरमा।',
    price: 15,
    tags: ['Vegetarian', 'Sweet', 'Fried'],
  },
  {
    id: 'bara',
    name: 'Bara',
    description: 'कालो दाल, अदुवा, जिरा र नुन मिसाएर बनाइएको नेवारी परिकार बारा।',
    price: 20,
    tags: ['Vegetarian', 'Savory', 'Gluten-Free'],
  },
  {
    id: 'milk-tea',
    name: 'Milk Tea',
    description: 'दूध, चिया पत्ती, चिनी र हल्का मसला मिसाइएको तातो दूध चिया।',
    price: 25,
    tags: ['Vegetarian', 'Hot', 'Beverage'],
  },
  {
    id: 'black-coffee',
    name: 'Black Coffee',
    description: 'कफी बिन्स र तातो पानीबाट बनाइएको स्ट्रङ ब्ल्याक कफी।',
    price: 30,
    tags: ['Vegetarian', 'Hot', 'Beverage'],
  },
  {
    id: 'chicken-roast',
    name: 'Chicken Roast (3 pcs)',
    description: 'नुन, मसला र तेलमा मेरिनेट गरिएको चिकनलाई राम्रोसँग सेकेको रोस्ट।',
    price: 75,
    tags: ['Non-Vegetarian', 'Savory'],
  },
  {
    id: 'gajar-halwa',
    name: 'Gajar Halwa',
    description: 'गाजर, दूध, घिउ, चिनी र सुकामेवा मिसाएर पकाइएको मीठो हलुवा।',
    price: 120,
    tags: ['Vegetarian', 'Sweet'],
  },
];

