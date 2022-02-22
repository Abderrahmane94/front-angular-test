import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";

@Component({
  selector : 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit{
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage: boolean = false;
  listFilter = "cart";
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "1- Garden Cart",
      "productCode": "-GDN-0023",
      "releaseDate": "1- March 18, 2021",
      "description": "1- 15 description",
      "price": 14.25,
      "starRating": 4.2,
      "imageUrl": "assets/images/1.png"
    },
    {
      "productId": 2,
      "productName": "2- Garden Cart",
      "productCode": "-GDN-0023",
      "releaseDate": "2- March 18, 2021",
      "description": "2- 15 description",
      "price": 19.00,
      "starRating": 1.5,
      "imageUrl": "assets/images/2.png"
    }
  ];

  toggleImage() : void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {

    console.log('coucou from onInit');
  }



}
