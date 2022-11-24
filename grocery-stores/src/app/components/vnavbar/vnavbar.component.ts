import { Category } from './../../common/category';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vnavbar',
  templateUrl: './vnavbar.component.html',
  styleUrls: ['./vnavbar.component.css']
})
export class VnavbarComponent implements OnInit {
  @Input() navbarElements:Category[];
  constructor() { }

  ngOnInit(): void {
    this.navbarElements.forEach((item)=>{
      console.log(item);
    })
  }

}
