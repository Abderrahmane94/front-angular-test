import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<any> = new EventEmitter<any>();

  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit("the rating " + this.rating + " was clicked !");
  }
}
