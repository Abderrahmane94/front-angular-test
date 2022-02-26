import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarComponent} from "./star.component";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatSliderModule} from "@angular/material/slider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ]
})
export class SharedModule {
}
