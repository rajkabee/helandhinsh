import { Component } from '@angular/core';
import * as paypal from "../assets/js/minicart.js";
declare let paypal: any;
declare var jQuery: any;
declare function greet():void;
declare var flexslider:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocery-store';
  ngOnInit(){
    let cartItems:any;
   // paypal.minicart.cart.on('checkout', this.checkout(),cartItems);
    paypal.minicart.render();






  }
  checkout(){
    console.log('checking Out');
    paypal.minicart.reset();
  }
}
