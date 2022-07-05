
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./courses.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy!: string;

    constructor(private courseService: CourseService) {

    }
    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses= this._courses;
    }

    set filter(valeu: string) {
        this._filterBy = valeu;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}