import { map } from 'rxjs/operators';
import { Country } from './../common/country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryStateService {

  constructor(private http: HttpClient) { }
  public getCountries(){
    const headers= new HttpHeaders()
                    .set('Accept', 'application/json')
                    .set('Authorization','Bearer WmNJWlRBZEg3U2wxYjZCRTNoYVo3NWdjaDBWNHJGbWNFZHA0MUVJOA==');
     return this.http.get<Country[]>("https://countryapi.io/api/all", {headers})
                      .subscribe(
                        (response)=>{
                          console.log(response);
                        }
                      )


  }
}
