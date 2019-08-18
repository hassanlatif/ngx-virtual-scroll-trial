import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gallery-img',
  templateUrl: './gallery-img.component.html',
  styleUrls: ['./gallery-img.component.scss']
})
export class GalleryImgComponent implements OnInit {

  @Input() item: any;
  private index;

  constructor() {

  }

  ngOnInit() {
    // console.log(this.item); 
    this.index = this.item % 3;
    console.log(this.index);

  }

}
