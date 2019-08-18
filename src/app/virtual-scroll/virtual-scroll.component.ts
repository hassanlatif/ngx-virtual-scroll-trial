import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'virtual-scroll-test',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {

  items: number[]= [];

  constructor() {

    for (let index = 0; index < 1000; index++) {
      this.items.push(index);
    }

  }

  ngOnInit() {

  }

}
