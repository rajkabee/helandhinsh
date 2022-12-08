import { CartItem } from './../../common/cart-item';
import { CartService } from './../../services/cart.service';
import { FromServiceService } from './../../services/from-service.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  serviceCharge: number=10;
  constructor(private cartService: CartService) { }
  shippingAddress= new FormGroup({
    fullName: new FormControl(''),
    mobileNumber: new FormControl(''),
    landmark: new FormControl(''),
    city: new FormControl(''),
    addressType: new FormControl(''),
  });


  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;
    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
    data => this.totalPrice = data
    );
    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
    data => this.totalQuantity = data
    );
    // compute cart total price and total quantity
    this.cartService.computeCartTotals();
    }
    incrementQuantity(theCartItem: CartItem) {
      this.cartService.addToCart(theCartItem);
    }

    decrementQuantity(theCartItem: CartItem) {
      this.cartService.decrementQuantity(theCartItem);
    }
    remove(theCartItem: CartItem) {
      this.cartService.remove(theCartItem);
    }

    onSubmit(){
      console.log(this.shippingAddress);
    }



  // checkoutFormGroup: FormGroup;
  // constructor(private formBuilder: FormBuilder,
  //             private formService: FromServiceService
  //             ) { }
  // creditCardYears: number[] = [];
  // creditCardMonths: number[] = [];

  // ngOnInit(): void {
  //   this.checkoutFormGroup = this.formBuilder.group({
  //     customer: this.formBuilder.group({
  //     firstName: [''],
  //     lastName: [''],
  //     email: ['']
  //     }),
  //     creditCard: this.formBuilder.group({
  //       expirationYear: [''],
  //       expirationMonth: ['']
  //     })
  //     });
  //     const startMonth: number = new Date().getMonth() + 1;
  //     console.log("startMonth: " + startMonth);
  //     this.formService.getCreditCardMonths(startMonth).subscribe(
  //     data => {
  //     console.log("Retrieved credit card months: " + JSON.stringify(data));
  //     this.creditCardMonths = data;
  //     });
  //     this.formService.getCreditCardYears().subscribe(
  //       data => {
  //       console.log("Retrieved credit card years: " + JSON.stringify(data));
  //       this.creditCardYears = data;
  //       }
  //       );
  // }

  // onSubmit() {
  //   console.log("Handling the submit button");
  //   console.log(this.checkoutFormGroup.get('customer').value);
  //   }

  //   handleMonthsAndYears() {
  //     const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
  //     const currentYear: number = new Date().getFullYear();
  //     const selectedYear: number = Number(creditCardFormGroup.value.expirationYear);
  //     // if the current year equals the selected year, then start with current month
  //     let startMonth: number;
  //     if (currentYear === selectedYear) {
  //     startMonth = new Date().getMonth() + 1;
  //     }
  //     else {
  //     startMonth = 1;
  //     }
  //     this.formService.getCreditCardMonths(startMonth).subscribe(
  //     data => {
  //     console.log("Retrieved credit card months: " + JSON.stringify(data));
  //     this.creditCardMonths = data;
  //     }
  //     );
  //     }
}
