import { Product } from './../../common/product';
import { ProductService } from './../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 100;
  products:Product[]=[];

  defaultUrl:string="http://localhost:8080/"
  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    // const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    // // now search for the products using keyword
    // this.productService.searchProducts(theKeyword).subscribe(
    // data => {
    // this.products = data;
    // }
    // )
    this.listProducts();
  }


  listProducts(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    this.productService.searchProducts(theKeyword, this.thePageNumber-1, this.thePageSize).subscribe(
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
