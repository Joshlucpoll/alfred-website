import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Axios from 'axios';

@Component({
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  loading = false;
  submitted = false;
  loggedIn = false;

  currentProject = false;

  projectsConfigState = [];
  images = {};

  APIConfig: any;
  URL = 'https://api.github.com';
  axios = Axios;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.errorMessage = '';
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
    });
  }

  getProjectsConfig() {
    this.axios
      .get(
        this.URL +
          '/repos/Joshlucpoll/alfred-website/contents/src/assets/projects.ts',
        this.APIConfig
      )
      .then((response) => {
        const content = atob(response.data.content);
        let configString = content
          .split('const projects: Projects = ')
          .pop()
          .split(';')[0]
          .trim();

        const lines = configString.split('\n');
        const filteredLines = lines.filter(
          (line) => !line.includes('function()')
        );

        configString = filteredLines.join('\n');

        const config = JSON.parse(configString);
        this.projectsConfigState = config;
        this.getImages();
      })
      .catch((err) => {
        this.errorMessage = err;
      });
  }

  getImages() {
    console.log(this.projectsConfigState);
    for (let project of this.projectsConfigState) {
      this.images[project.titleImage] = "https://raw.githubusercontent.com/Joshlucpoll/alfred-website/master/src" + project.titleImage;
    }
    console.log(this.images);
  }

  async getImageURL(path: string) {
    return await this.axios
      .get(
        this.URL + '/repos/Joshlucpoll/alfred-website/contents/src' + path,
        this.APIConfig
      )
      .then((response) => response.data.download_url)
      .catch((err) => {
        console.log(err);
        this.errorMessage = err;
      });
  }

  editProject(project) {
    this.currentProject = project;
  }

  backButton() {
    this.currentProject = false;
  }

  initEditing() {
    this.getProjectsConfig();
    // this.axios
    //   .get(
    //     this.URL +
    //       '/repos/Joshlucpoll/alfred-website/contents/src/assets/corridor/corridor.mp4',
    //     this.APIConfig
    //   )
    //   .then((response) => console.log(response));
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.errorMessage = '';
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // login here
    this.loading = true;
    this.axios
      .get(this.URL + '/user', {
        headers: {
          Authorization: 'token ' + this.f.username.value,
          Accept: 'application/vnd.github.v3+json',
        },
      })
      .then((response) => {
        const userId = response.data.id;
        this.axios
          .get(this.URL + '/repos/Joshlucpoll/alfred-website/contributors', {
            headers: {
              Authorization: 'token ' + this.f.username.value,
              Accept: 'application/vnd.github.v3+json',
            },
          })
          .then((response) => {
            const contributors = response.data;
            console.log(contributors);
            for (let contributor of contributors) {
              if (userId == contributor.id) {
                const token = this.f.username.value;
                this.APIConfig = {
                  headers: {
                    Authorization: 'token ' + token,
                    Accept: 'application/vnd.github.v3+json',
                  },
                };

                this.loggedIn = true;
                this.initEditing();
                break;
              }
            }
            if (!this.loggedIn)
              this.errorMessage = 'You are not authorised to access this page';
          })
          .catch((err) => {
            this.errorMessage = err;
          });
      })
      .catch((err) => {
        this.errorMessage = err;
      });

    this.loading = false;
  }
}
