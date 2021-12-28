import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-comp-lib',
  template: `
    <p>
      comp-lib works!
    </p>
    <a [routerLink]="[{ outlets: { element: ['comp-a'] } }]">
        Element A
    </a>
    <a [routerLink]="[{ outlets: { element: ['comp-b'] } }]">
        Element B
    </a>
    <router-outlet name="element"></router-outlet>
  `,
  styles: [
  ]
})
export class CompLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// <a [routerLink]="[{ outlets: { primary: ['products'],sidebar: ['products'] } }]">
//         Products List
//     </a>