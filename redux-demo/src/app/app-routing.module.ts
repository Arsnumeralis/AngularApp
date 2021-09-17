import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component: HomeComponent},
  {path:"courses", component: CoursesComponent, children:[
    {path:":id", component: CourseComponent}
  ]},
  // {path:"courses/:id", component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
