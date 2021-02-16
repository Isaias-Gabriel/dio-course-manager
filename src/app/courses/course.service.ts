import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root',
})
export class CourseService {

    private courseUrl: string = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient) {

    }

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.courseUrl);
    }

    retrieveOneById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.courseUrl}/${id}`);
    }

    save(course: Course): Observable<Course> | undefined {
        if(course.id) {
            return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
        }

        else {
            return this.httpClient.post<Course>(`${this.courseUrl}`, course);
        }
    }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.courseUrl}/${id}`);
    }
}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular 101',
        imageUrl: '/assets/images/cli.png',
        price: 10.1,
        code: '101101101',
        duration: 320,
        rating: 5.0,
        releaseDate: 'November, 4, 2021',
        description: 'Course description',
    },
    {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 10.1,
        code: '101101102',
        duration: 120,
        rating: 4.7,
        releaseDate: 'July, 7, 2021',
        description: 'Course description',
    },
    {
        id: 3,
        name: 'Angular - advanced applications',
        imageUrl: '/assets/images/animations.png',
        price: 27.3,
        code: '101101103',
        duration: 220,
        rating: 5.0,
        releaseDate: 'November, 7, 1917',
        description: 'Course description',
    },

];