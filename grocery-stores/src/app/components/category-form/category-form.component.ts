import { HttpClient } from '@angular/common/http';
import { Category } from './../../common/category';
import { CategoryService } from './../../services/category.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onSubmit(category:{name:string, description: string}): void {
    this.categoryService.addCategory(category);

  }


}
