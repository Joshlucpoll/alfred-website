import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  MainTitle = 'Alfie Hilton';

  projects: any;
  currentImage: number = 0;
  menuOpacity: number = 1;
  menuScale: number = 1;

  constructor(private router: Router, private activatedroute: ActivatedRoute) {}

  onClick(project) {
    const urlify = function(a){return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '')};
    const url = '/' + urlify(project.title);
    

    this.router.navigateByUrl(url);
  }

  backButton() {
    document.getElementById('main').scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  updateScroll(event) {
    const el = document.getElementById('main');
    
    const scrollRatio = el.scrollLeft / Math.max(window.innerWidth / 40, 400);
    this.menuOpacity = 1 - scrollRatio;
    this.menuScale = 1 - scrollRatio / 20; 
  }
 
  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.projects = data.projects;
    })

    setTimeout(() => {
      document.getElementById("work-link").classList.add("current-page");
    }, 700);

    document.getElementById('main').addEventListener('scroll', ($event) => this.updateScroll($event));
  }
}