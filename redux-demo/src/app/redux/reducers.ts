// a reducer is a pure fn that accepts an action and returns a new version of the app state
// the reducer must not modify the state nor should it have any side effects
// there exists a ngrx library for handling side effects called @ngrx/effects

import { Course } from "../models/course.model";
import { Action } from "./action";

const initialCourse = [
    {
        id: 1,
        code: "angdev",
        name: "Angular Development",
        date: new Date(2021, 8 , 13),
        duration: 3,
        trainer: {
            name: "Stuart",
            email: "stuartb@stayahead.com",
            active: true
        },
        client: {
            name: "Bud Systems",
            contact: {
                name: "Mark",
                phone: "55555 555 555",
                email: "mark@bud.co.uk"
            },
            location: "Bristol"
        }
    }
]

// the state that is passed in in one branch only (a subset) of the whole store
// the default value is only used for the 1st time
const courseReducer = (state: Array<Course> = initialCourse, action: Action):Array<Course> => {
    // TODO - transform the state based on the data in the action
    switch (action.type) {
        case "CHANGE_COURSE_DATE":
            //todo - return a new version of the state with the updated course date.
            return state.map(course => {
                if (course.id === action.payload.courseId) {
                    return {...course, date: action.payload.newDate};
                }
                return course;
            });
        default:
            return state;
    }
}

export { courseReducer }