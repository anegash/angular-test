import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WizardComponent } from "./wizard.component";


import { IformsModule } from "src/app/l-components/forms/iforms.module";

import { ProductSearchComponent } from './product-search/product-search.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap';

const wizardRoutes: Routes = [
  {
    path: "",
    component: WizardComponent,
    children: [
      {
        path: "searchProduct",
        component: ProductSearchComponent,
      }
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(wizardRoutes),
    ReactiveFormsModule,
    IformsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot()
    // AddAmazonProductToWishlistModule
  ],
  declarations: [
    WizardComponent,
    ProductSearchComponent],
  providers: [],
})
export class WizardModule { }
