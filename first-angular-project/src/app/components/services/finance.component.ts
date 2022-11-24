import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-finance',
  template: `
    <h1>Finance</h1>
  `,
  styles: ["h1{color: dodgerblue;}"]
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
