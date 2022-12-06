
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as paypal from '../../../assets/js/minicart.js';
declare let paypal: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
    }
    viewCart(){
      console.log("cart rendering");
      
      paypal.minicart.view.show();
    }
}
