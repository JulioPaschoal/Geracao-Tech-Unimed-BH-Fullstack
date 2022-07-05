
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 3.4,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 1,
                name: 'React Forms',
                imageUrl: '/assets/images/http.png',
                price: 199.99,
                code: 'XPS-8756',
                duration: 240,
                rating: 4.5,
                releaseDate:'December, 20, 2019'
            }
        ]
    }
}