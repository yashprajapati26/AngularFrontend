import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private http: HttpClient) { }

  add_Book(data:any){
    const url = "http://127.0.0.1:3000/api/upload_book"
    return this.http.post(url, data);
  }

  
}
