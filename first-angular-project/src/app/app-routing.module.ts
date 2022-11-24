import { FinanceComponent } from './components/services/finance.component';
import { SalesComponent } from './components/services/sales.component';
import { ServicesComponent } from './components/services/services.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './components/services/purchase.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "categories", component: CategoriesComponent},
  {
    path: "services",
    component: ServicesComponent,
    children:[
      {path: "purchase", component: PurchaseComponent},
      {path: "sales", component: SalesComponent},
      {path: "finance", component: FinanceComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
