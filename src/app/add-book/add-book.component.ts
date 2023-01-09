import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddBookService } from './add-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(private addBookService: AddBookService, private router:Router){};

  bookForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    // book_image: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    // file: new FormControl('', [Validators.required]),
  });

  file:any;
  title:any;
  
  formData = new FormData();


  ngOnInit() {};

  addBook():void{
    console.log(this.bookForm.value);
     
    // this.formData.append('file', this.file);
    // this.formData.append('title', this.bookForm.get('title').value);
    // this.formData.append('price', this.bookForm.get('price').value);
    // this.formData.append('book_image', this.bookForm.get('book_image').value);
    // this.formData.append('description', this.bookForm.get('description').value);

    
    
    this.addBookService.add_Book(this.bookForm.value).subscribe((result)=>{
      if(result){
        console.log(result);
        this.router.navigate(['seller_home'])
      }
    })
  }
 
  
  onFileSelect(event:any):void{
    console.log('file selected',event);
     
    this.file = event.target.files[0];
    // this.bookForm.patchValue({
    //   file:this.file
    // })
    
    console.log("select file ..",this.file);

    this.addBookService.add_Book(this.formData).subscribe((result)=>{
      if(result){
        console.log(result);
        this.router.navigate(['seller_home'])
      }
    })
    // this.bookForm.patchValue({book_image:file});
    const allowedMimeTypes = ["image/jpeg", "image/jpg","image/png"];

   
    console.log("888",this.bookForm.value);

    
  }
}
