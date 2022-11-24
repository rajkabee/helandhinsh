import { Category } from './../../common/category';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  categories: Category[]=[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data)=>{
        data.forEach(item=>this.categories.push(item));
      });
     // console.log(this.categories);

  }

}
