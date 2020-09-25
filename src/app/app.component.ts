import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';
import { Router, RouterOutlet } from '@angular/router';

const fader =
trigger('routeAnimations', [
  transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          opacity: 0,
          transform: 'translateX(100%)',
        }),
      ], {optional: true}),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent implements OnInit {

  // outlet: RouterOutlet;
  
  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.currentTile = 0;
      document.getElementById("main").scroll({
        top: 0,
        left: 0,
      });
    });
  }

  currentTile: number = 0;

  scrollHorizontally($event) {
    console.log(this.currentTile);
    const tiles = document.getElementsByClassName("item");

    $event = window.event || $event;
    $event.preventDefault();
    
    var direction = Math.max(-1, Math.min(1, ($event.wheelDelta || -$event.detail)));
    this.currentTile -= direction;
    
    if (this.currentTile >= tiles.length) {
      this.currentTile = tiles.length - 1;
    }
    if (this.currentTile < 0) {
      this.currentTile = 0;
    }
    
    if (this.currentTile === 0) {
      document.getElementById("main").scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
    else {
      document.getElementsByClassName("item")[this.currentTile].scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  ngOnInit() {
    // IE9, Chrome, Safari, Opera
    document.getElementById('main').addEventListener('mousewheel', ($event) => this.scrollHorizontally($event));
    // Firefox
    document.getElementById('main').addEventListener('DOMMouseScroll', ($event) => this.scrollHorizontally($event));
  }
}