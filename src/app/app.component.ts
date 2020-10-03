import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, query } from '@angular/animations';
import { Router } from '@angular/router';

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
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      setTimeout(() => {
        this.currentScrollValue = 0;
        document.getElementById("main").scroll({
          top: 0,
          left: 0,
        });
        window.scroll({
          top: 0,
          left: 0,
        });
      }, 250);
    });
  }

  currentScrollValue: number = 0;

  scrollHorizontally($event) {
    const main = document.getElementById("main");

    $event = window.event || $event;
    $event.preventDefault();
    
    var direction = Math.max(-1, Math.min(1, ($event.wheelDelta || -$event.detail)));
    
    var limit = Math.max( document.body.scrollWidth, document.body.offsetWidth, 
      main.scrollWidth, main.offsetWidth );
    var position = this.currentScrollValue - (direction * 50);

    if (position < 0) {
      position = 0;
    }
    if (position > limit) {
      position = limit;
    }

    this.currentScrollValue = position;
    main.scroll({
      top: 0,
      left: this.currentScrollValue,
    });
  }

  ngOnInit() {
    // IE9, Chrome, Safari, Opera
    document.getElementById('main').addEventListener('mousewheel', ($event) => this.scrollHorizontally($event));
    // Firefox
    document.getElementById('main').addEventListener('DOMMouseScroll', ($event) => this.scrollHorizontally($event));

  }
}