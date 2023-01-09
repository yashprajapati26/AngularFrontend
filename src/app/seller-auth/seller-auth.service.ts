import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {

  constructor(private http:HttpClient) {}

  SellerSignup(data:any){
    console.log("service call");
    const url='http://localhost:3000/api/signup';
   
    return this.http.post(url,data);
  }

}
