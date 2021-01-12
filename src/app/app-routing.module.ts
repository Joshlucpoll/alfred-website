import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import projects from '../assets/projects';

const urlify = function(a){return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, '')};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {projects: projects}
  },
  {
    path: '**',
    redirectTo: '',
  },
];

projects.forEach((project) => {
  routes.unshift({
    path: urlify(project.title),
    component: ProjectComponent,
    data: {project: project, projects: projects}
  })
})

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
