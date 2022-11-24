import { FinanceComponent } from './components/services/finance.component';
import { SalesComponent } from './components/services/sales.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './components/services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseComponent } from './components/services/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,
    ServicesComponent,
    PurchaseComponent,
    SalesComponent,
    FinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
