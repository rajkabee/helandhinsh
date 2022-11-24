import { Category } from './../common/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  responseData: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  baseUrl: string="http://localhost:8080/api/categories"
  constructor(private httpClient: HttpClient) { }


  addCategory(category: {name:string, description: string}): Observable<Category> {
    this.httpClient.post(this.baseUrl,category).subscribe(
      (data)=>{
        this.responseData=data;
      }

    );
    return this.responseData;
  }




 getCategories(): Observable<Category[]>{
  return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    map(response => response._embedded.categories)
  );
 }


}

interface GetResponse {
  _embedded: {
    category: Category;
    categories: Category[];
  },

}
