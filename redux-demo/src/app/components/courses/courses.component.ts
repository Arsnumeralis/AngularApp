import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { createSelector, Store } from '@ngrx/store';
import { Course } from 'src/app/models/course.model';
import { AppState } from 'src/app/redux/state';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Array<Course> = [];

  constructor(private store: Store<AppState>, private activatedRoute:ActivatedRoute) {

    this.activatedRoute.paramMap.subscribe(paramMap => console.log(paramMap.get("id")));
    // we must first select the branch/slice of the store we are interested in
    // we do that using select, which accepts a map fn
    // we then subscribe because each time the store is transformed, a new version will be pushed to us
    this.store.select(state => state.courses).subscribe(courses => this.courses = courses);
    
    const coursesSelector = (state: AppState) => state.courses;
    this.store.select(coursesSelector).subscribe(courses => console.log(courses));

    // the create selector function enables you to chain selectors together
    // if there already is a selector for courses, I don't want to have to start from scratch to get to course
    const courseSelector = (courseId: number) => createSelector(
      coursesSelector,
      (courses: Array<Course> )  => courses?.find(course => course.id === courseId)
    );
    this.store.select(courseSelector(1)).subscribe(course => console.log(course));
    this.store.select(state => state.courses.find(c => c.id === 1)).subscribe(course => console.log(course));

    const courseTrainerSelector = (courseId: number) => createSelector(
      courseSelector(courseId),
      (course: Course | undefined) => course?.trainer
    );
    this.store.select(courseTrainerSelector(1)).subscribe(trainer => console.log(trainer));

    // dispatching actions
    this.store.dispatch({type: "CHANGE_COURSE_DATE", payload: {courseId:1, newDate: new Date(2021, 8, 20)}});

  }


  ngOnInit(): void {
  }

}
