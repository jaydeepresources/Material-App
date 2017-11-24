import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, style, animate,state } from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('fade', [
      // state('void',style({opacity:0})),
      transition('void=>*', [
        style({ opacity: 0 }),
        animate(2000)
      ]),
      transition('*=>void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AnimateComponent implements OnInit {
  items: string[];
  constructor() {
    this.items = ["item 1", "item 2", "item 3"];
  }

  ngOnInit() {
  }

  deleteItem(i) {
    this.items.splice(i,1);
  }
}
