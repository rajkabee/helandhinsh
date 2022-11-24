import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-sales',
  template: `
    <h1>Sales</h1>
  `,
  styles: ["h1{color: dodgerblue;}"]
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
