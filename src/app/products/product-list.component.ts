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
  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filtredProducts = this.performFilter(value);
  }

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
      "productName": "2- Garden bus",
      "productCode": "-GDN-0023",
      "releaseDate": "2- March 18, 2021",
      "description": "2- 15 description",
      "price": 19.00,
      "starRating": 1.5,
      "imageUrl": "assets/images/2.png"
    }
  ];
  filtredProducts: IProduct[] = this.products;

  performFilter(filterBy: string) : IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct ) =>
    product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage() : void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {

    console.log('coucou from onInit');
  }



}
