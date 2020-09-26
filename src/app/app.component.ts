import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, query } from '@angular/animations';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
    transition( '* => *', [
        query(':enter', 
            [
                style({ opacity: 0 })
            ], 
            { optional: true }
        ),
        query(':leave', 
            [
                style({ opacity: 1 }),
                animate('200ms', style({ opacity: 0, position: "absolute" }))
            ], 
            { optional: true }
        ),
        query(':enter', 
            [
                style({ opacity: 0 }),
                animate('200ms 200ms', style({ opacity: 1 })),
            ], 
            { optional: true }
        )
    ])])
  ]
})

export class AppComponent implements OnInit {


  getRouterOutletState(outlet) {
    if (window.innerWidth > 600) {
      return outlet.isActivated ? outlet.activatedRoute : '';
    }
  }

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      this.currentTile = 0;
      if (window.innerWidth > 600) {
        setTimeout(() => {
          document.getElementById("main").scroll({
            top: 0,
            left: 0,
          });
          window.scroll({
            top: 0,
            left: 0,
          });
        }, 250);
      }
      else {
        document.getElementById("main").scroll({
          top: 0,
          left: 0,
        });
        window.scroll({
          top: 0,
          left: 0,
        });
      }
    });
  }

  currentTile: number = 0;

  scrollHorizontally($event) {

    if (window.innerWidth > 600) {

      console.log("scrilliong")
      
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
  }

  ngOnInit() {
    // IE9, Chrome, Safari, Opera
    document.getElementById('main').addEventListener('mousewheel', ($event) => this.scrollHorizontally($event));
    // Firefox
    document.getElementById('main').addEventListener('DOMMouseScroll', ($event) => this.scrollHorizontally($event));
  }
}