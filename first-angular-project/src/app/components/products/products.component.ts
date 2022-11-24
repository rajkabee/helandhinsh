import {Component, OnInit} from '@angular/core';
@Component({
  selector:'app-products',
  templateUrl: './products.component.html',
  styles: [
    `h1{
      color: blue;
    }`
  ]
})

export class ProductsComponent implements OnInit{
  fruits: string[]=[
    "Apples",
    "Bananas",
    "Papayas",
    "Mangoes",
    "Avacadoes"
  ];
  show: boolean=true;
  btnname: string="hide";
  constructor() { }

  ngOnInit(): void {
  }

  hideTitle():void{
    this.show=false;
  }
  toggleTitle():void{
    this.show= !this.show;
    if(this.btnname=="hide"){
      this.btnname="show";
    }
    else{
      this.btnname="hide";
    }
  }
}
