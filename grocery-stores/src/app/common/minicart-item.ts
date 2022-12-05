import { Product } from './product';
export class MinicartItem {
  item_name: string;
  amount: number;
  constructor(product: Product) {

    this.item_name = product.name;
    this.amount = product.unitPrice;
    }
}
