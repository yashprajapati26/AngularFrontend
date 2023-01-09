import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {

  constructor(private http:HttpClient) { }

  fatchUserDetails() {
    const url = "http://127.0.0.1:3000/api/userdetails";
    return this.http.get(url);
  }
}
