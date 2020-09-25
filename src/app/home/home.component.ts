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

  constructor(private router: Router, private activatedroute: ActivatedRoute) {}

  onClick(project) {
    const urlify = function(a){return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '')};
    const url = '/' + urlify(project.title);
    

    this.router.navigateByUrl(url);
  }
 
  ngOnInit() {

    this.activatedroute.data.subscribe(data => {
      this.projects = data.projects;
    })
  }
}
