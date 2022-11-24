import { Category } from './category';
export class Product {
  id:number;
  sku: string;
  name: string;
  description: string;
  manufacturer: string;
  imageUrl: string;
  active: boolean;
  unitPrice: number;
  quantity: number;
  categories: Category[];
  properties: [
    name: string,
    value: string
  ]
}
