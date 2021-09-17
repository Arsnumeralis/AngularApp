import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(/*private activatedRoute:ActivatedRoute*/) {
    // this.activatedRoute.paramMap.subscribe(paramMap => console.log(paramMap.get("id")));
    // 1. we could inject the store and select the given course from there
    // 2. we could make this component a child of the courses component and pass the course down
    // 3. we could include a router outlet inside the courses component and add child routes
    // 4. we could inject a service and obtain the course from there.
   }

  ngOnInit(): void {
  }

}
