import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'virtual-scroll-test',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  public items: number[]= [];
  public viewPortItems: any;

  constructor() {

    for (let index = 0; index < 100; index++) {
      this.items.push(index);
    }

  }

  ngOnInit() {

  }

  fetchMore(event) {

    console.log(event);

  }

}
