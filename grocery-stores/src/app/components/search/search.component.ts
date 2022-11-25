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
  products:Product[]=[];

  defaultUrl:string="http://localhost:8080/"
  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
// now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
    data => {
    this.products = data;
    }
)
  }

}
