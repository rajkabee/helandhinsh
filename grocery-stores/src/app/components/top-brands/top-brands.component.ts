import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-brands',
  templateUrl: './top-brands.component.html',
  styleUrls: ['./top-brands.component.css']
})
export class TopBrandsComponent implements OnInit {
  topBrands:string[]=[
    'Gyan',
    'Hulas',
    'Cook',
    'Nestle'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
