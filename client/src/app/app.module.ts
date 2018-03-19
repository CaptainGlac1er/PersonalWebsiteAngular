import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { router } from './app.router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ProjectComponent } from './pages/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { TileComponent } from './shared/tile/tile.component';
import { ComputersComponent } from './pages/hobbies/computers/computers.component';
import { Error404Component } from './shared/error404/error404.component';
import { PhotographyComponent } from './pages/hobbies/photography/photography.component';
import { GamingComponent } from './pages/hobbies/gaming/gaming.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    HobbiesComponent,
    ResumeComponent,
    ProjectComponent,
    FooterComponent,
    TileComponent,
    ComputersComponent,
    Error404Component,
    PhotographyComponent,
    GamingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,
      {useHash: false})
  ],
  providers: [HobbiesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
