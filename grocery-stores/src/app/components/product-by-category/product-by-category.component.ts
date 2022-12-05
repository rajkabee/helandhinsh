import { MinicartItem } from './../../common/minicart-item';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../common/cart-item';
import { Product } from './../../common/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import * as paypal from '../../../assets/js/minicart.js';
declare let paypal: any;
@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {
  sampleData={
    "item_name": "Product",
    "amount": 5.00
    };
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 100;
  currentCategoryId;
  products: Product[]=[];
  defaultUrl:string="http://localhost:8080/"
  constructor(private route:ActivatedRoute,
    private productService:ProductService,
    private cartService:CartService,) {
    this.route.params.subscribe( params => {
      this.currentCategoryId=params;
    });
  }

  ngOnInit(): void {
    //console.log(this.currentCategoryId);
    this.listProducts();
    paypal.minicart.render();
  }

  listProducts(){
    this.productService.getProductsByCategory(this.currentCategoryId, this.thePageNumber-1, this.thePageSize).subscribe(
      (data)=>{
          this.products = data._embedded.products;
          this.thePageNumber = data.page.number + 1;
          this.thePageSize = data.page.size;
          this.theTotalElements = data.page.totalElements;

      }
    );
  }


    updatePageSize(event: Event) {
        this.thePageSize =Number((event.target as HTMLInputElement).value);
        this.thePageNumber = 1;
        this.listProducts();
        }

  addToCart(theProduct) {
          console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);
          // TODO ... do the real work
          const theCartItem = new CartItem(theProduct);
          // TODO ... do the real work
          this.cartService.addToCart(theCartItem);
          //paypal.minicart.cart.add(this.sampleData);
          theProduct.item_name=theProduct.name;
          theProduct.amount = theProduct.unitPrice;
          console.log(theProduct);
          let item={ "business": "user@example.com", "item_name": "Product", "amount": 5.00, "currency_code": "USD" };
          paypal.minicart.cart.add(new MinicartItem(theProduct));
          }


}
