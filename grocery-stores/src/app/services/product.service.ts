import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './../common/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  baseUrl: string = "http://localhost:8080/api/products"
  constructor(private httpClient:HttpClient) { }



  getProductsByCategory(id:any,
                        thePage: number,
                        thePageSize: number,
    ): Observable<GetResponse>{
    //console.log(id);
    return this.httpClient.get<GetResponse>(this.baseUrl+'/search/findByCategoriesId?categoryId='+id["id"]+'&page='+thePage+'&size='+thePageSize);
  }
  searchProducts(theKeyword: string,
                thePage: number,
                thePageSize: number,): Observable<GetResponse> {
    // need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponse>(searchUrl);

    }
}
  interface GetResponse {
    _embedded: {
      products: Product[];
    },
    page: {
      size: number,
      totalElements: number,
      totalPages: number,
      number: number
      }
  }


