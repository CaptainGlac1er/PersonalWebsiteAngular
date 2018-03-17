import {Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectComponent } from './pages/project/project.component';
import { Error404Component } from './shared/error404/error404.component';
import { ComputersComponent } from './pages/hobbies/computers/computers.component';



export const router: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'hobbies',
        component: HobbiesComponent
    },
    {
        path: 'hobbies/computers',
        component: ComputersComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    },
    {
        path: 'projects',
        component: ProjectComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];
