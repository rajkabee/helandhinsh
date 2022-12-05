import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { SearchComponent } from './components/search/search.component';
import { ProductByCategoryComponent } from './components/product-by-category/product-by-category.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"categories/:id", component: ProductByCategoryComponent},
  {path: "category/add", component: CategoryFormComponent},
  {path: "search/:keyword", component: SearchComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
