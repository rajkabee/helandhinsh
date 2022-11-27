import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
  totalPrice: number;
  totalQuantity: number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }
  updateCartStatus() {
    // subscribe to the cart status totalPrice
    this.cartService.totalPrice.subscribe(
    data => this.totalPrice = data
    );
    // subscribe to the cart status totalQuantity
    this.cartService.totalQuantity.subscribe(
    data => this.totalQuantity = data
    );
    }
}
