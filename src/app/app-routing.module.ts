import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EducationComponent } from './components/about/education/education.component';
import { ExperiencesComponent } from './components/about/experiences/experiences.component';
import { HobbiesComponent } from './components/about/hobbies/hobbies.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'nav-bar',
    component: NavBarComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'experiences',
    component: ExperiencesComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
