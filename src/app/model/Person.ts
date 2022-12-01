import { PersonCourse } from "./PersonCourse"

export class Person{
    Person:string
    Courses: PersonCourse[]
    constructor(person:string,
        courses: PersonCourse[]){
            this.Person = person
            this.Courses = courses
    }
}