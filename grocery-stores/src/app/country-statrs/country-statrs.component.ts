import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CountryStateService } from './../services/country-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-statrs',
  templateUrl: './country-statrs.component.html',
  styleUrls: ['./country-statrs.component.css']
})
export class CountryStatrsComponent implements OnInit {
  countries:{[key: string]: Country}[]=[];
  posts:Post[]=[];
  constructor(private countryService: CountryStateService,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .subscribe(
          response=>{
            this.posts= response;
            console.log(this.posts);
          }
        );


    const headers= new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Authorization','Bearer P4jtNKZhPEfQ8E5ldUas1X4f5s8qKLRi0wvLOgvf');

    this.httpClient.get<{[key: string]: Country}[]>("https://countryapi.io/api/all", {headers})
        .subscribe(
          response=>{
            this.countries= response;
            for(let key in this.countries ){
              console.log(this.countries[key]?.['name']);
            }
          }
        );
    // this.countryService.getCountries().subscribe(
    //   response=> {
    //     this.countries=response;
    //   }
    // );;
  }

}
class Post{
    userId:number;
    id: number;
    title: string;
    body: string;
}
class Country{
  ctry:{
    name: string;
    official_name: string;
  }
}
