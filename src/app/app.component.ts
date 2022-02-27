import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class="mat-elevation-z6" color="primary">
      <span>{{pageTitle}}</span>
      <a mat-button routerLink="/welcome">Home</a>
      <a mat-raised-button color="warn" routerLink="/products">Product List</a>
      <a mat-raised-button color="accent" class="m-2" routerLink="/register">Register</a>
    </mat-toolbar>
    <div class="container m-5">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pageTitle = 'Product management APP';
}
