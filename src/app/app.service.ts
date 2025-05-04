import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
private http = inject(HttpClient);
  constructor() { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=20');
  }
}
