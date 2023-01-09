import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  fatchbooks() {
    const url = "http://127.0.0.1:3000/api/books";
    return this.http.get(url);
  }

  fatchUserDetailss() {
    const url = "http://127.0.0.1:3000/api/userdetails";
    return this.http.get(url);
  }
}
