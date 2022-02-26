import {NgModule} from '@angular/core';
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces.pipe";
import {ProductListMaterialComponent} from "../product-list-material/product-list-material.component";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-detail.guard";
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductListMaterialComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
    ]),
    SharedModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class ProductModule {
}
