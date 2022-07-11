import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Julio Cezar ',
        lastName: 'Paschoal',
        age: 35
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 28
      },
      {
        firstName: 'Joao',
        lastName: 'Pereira',
        age: 32
      },
      {
        firstName: 'Marcio',
        lastName: 'Santos',
        age: 40
      },
    ]

    return of(peopleArray)
  }
}
