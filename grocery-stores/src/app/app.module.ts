import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { OffersComponent } from './components/offers/offers.component';
import { FreshComponent } from './components/fresh/fresh.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { VnavbarComponent } from './components/vnavbar/vnavbar.component';
import { BannercarouselComponent } from './components/bannercarousel/bannercarousel.component';
import { TopBrandsComponent } from './components/top-brands/top-brands.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ProductByCategoryComponent } from './components/product-by-category/product-by-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    OffersComponent,
    FreshComponent,
    NewsletterComponent,
    FooterComponent,
    VnavbarComponent,
    BannercarouselComponent,
    TopBrandsComponent,
    HomeComponent,
    CategoryFormComponent,
    ProductByCategoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
