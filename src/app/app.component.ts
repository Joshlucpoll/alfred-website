import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  MainTitle = 'Alfred Portfolio';

  projects = [
    {
      title: "Black Hole",
      image: "/assets/images/black_hole.png"
    },
    {
      title: "Bulb Table",
      image: "/assets/images/bulb_table2.png"
    },
    {
      title: "Catwalk",
      image: "/assets/images/catwalk.png"
    },
    {
      title: "Rapier Wand",
      image: "/assets/images/rapier_wand.png"
    },
    {
      title: "Sofa",
      image: "/assets/images/sofa_cloth_sim.png"
    },
    {
      title: "Sonic Screwdrivers",
      image: "/assets/images/sonics.png"
    },
    {
      title: "Wands",
      image: "/assets/images/wands.png"
    },
  ];
 
  ngOnInit() {
    
    function scrollHorizontally(e) {
        e = window.event || e;
        var direction = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('main').scrollLeft -= (direction * 80);
        e.preventDefault();
    }
    // IE9, Chrome, Safari, Opera
    document.getElementById('main').addEventListener('mousewheel', scrollHorizontally, false);
    // Firefox
    document.getElementById('main').addEventListener('DOMMouseScroll', scrollHorizontally, false);

  }
}