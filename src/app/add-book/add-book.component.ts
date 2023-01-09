import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddBookService } from './add-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private addBookService: AddBookService, private router:Router){};

  file:any;
  title:any;
  
  formData = new FormData();


  ngOnInit() {};

  addBook(data:any):void{
    
    console.log("data :>",data)

    this.formData.append('title', data['title']);
    this.formData.append('price', data['price']);
    this.formData.append('book_image', data['book_image']);
    this.formData.append('description', data['description']);

  
    this.addBookService.add_Book(this.formData).subscribe((result)=>{
      if(result){
        console.log(result);
        this.router.navigate(['seller_home'])
      }
    })
  }
 
  
  onFileSelect(event:any):void{
    console.log('file selected',event);
    this.file = event.target.files[0];
    this.formData.append('file', this.file);
    console.log("select file ..",this.file);
    // const allowedMimeTypes = ["image/jpeg", "image/jpg","image/png"];
  }
}




