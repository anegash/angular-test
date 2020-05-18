
import { ImageURLPipe } from "./pipe/image-url.pipe";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { AddAmazonProductToWishlistModule } from "./component/add-amazon-product-to-wishlist/add-amazon-product-to-wishlist.module";
import { IformsModule } from "./l-components/forms/iforms.module";
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

// import { TermsAndConditionsComponent } from './component/terms-and-conditions/terms-and-conditions.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/welcome/searchProduct", pathMatch: "full" },
  {
    path: "welcome",
    loadChildren: () =>
      import("./component/wizard/wizard.module").then((m) => m.WizardModule),
    // data: { title: 'Catalog', breadcrumb: 'Catalog' },
    // canActivate: [AuthService]
  }];

@NgModule({
  declarations: [
    ImageURLPipe,
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    IformsModule,
    // AddAmazonProductToWishlistModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
