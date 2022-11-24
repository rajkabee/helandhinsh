import { Product } from './../../common/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.css']
})
export class ProductByCategoryComponent implements OnInit {
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 100;
  currentCategoryId;
  products: Product[]=[];
  defaultUrl:string="http://localhost:8080/"
  constructor(private route:ActivatedRoute, private productService:ProductService) {
    this.route.params.subscribe( params => {
      this.currentCategoryId=params;
    });
  }

  ngOnInit(): void {
    console.log(this.currentCategoryId);
    this.listProducts();
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

}
