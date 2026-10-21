export type ProductLine = 'tea' | 'mix';

export interface ProductSize {
  key: string;
  volume: string;
  price: number;
}

export interface Product {
  id: string;
  line: ProductLine;
  name: string;
  img: string;
  pos?: string;
  note: string;
  sizes: ProductSize[];
}

export interface CartItem {
  id: string;
  sizeKey: string;
  quantity: number;
  product: Product;
  size: ProductSize;
}

export interface CocktailRecipe {
  id: string;
  name: string;
  mixName: string;
  ingredients: string[];
  instruction: string;
  glass: string;
}
