import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerHomeService {

  constructor(private http:HttpClient) { }

  logoutUser(){
    const url = "http://127.0.0.1:3000/api/logout";
    return this.http.get(url);
  }

  // fatchUserDetails() {
  //   const url = "http://127.0.0.1:3000/api/userdetails";
  //   return this.http.get(url);
  // }
}
