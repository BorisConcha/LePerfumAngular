import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { PerfumesCardComponent } from './components/product-card/product-card.component';
import { BrandsSectionComponent } from './components/brands-section/brands-section.component';
import { BrandCardComponent } from './components/brand-card/brand-card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

// Modals
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { RegisterModalComponent } from './modals/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from './modals/forgot-password-modal/forgot-password-modal.component';
import { ProfileModalComponent } from './modals/profile-modal/profile-modal.component';
import { BrandModalComponent } from './modals/brand-modal/brand-modal.component';

// Shared Components
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';

// Pipes
import { CurrencyClpPipe } from './pipes/currency-clp.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    FeaturesSectionComponent,
    ProductsSectionComponent,
    PerfumesCardComponent,
    BrandsSectionComponent,
    BrandCardComponent,
    FiltersComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    ProductsComponent,
    BrandsComponent,
    AboutComponent,
    ProductDetailComponent,
    LoginModalComponent,
    RegisterModalComponent,
    ForgotPasswordModalComponent,
    ProfileModalComponent,
    BrandModalComponent,
    StarRatingComponent,
    SearchBarComponent,
    CurrencyClpPipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }