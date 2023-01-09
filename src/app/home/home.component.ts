import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private homeservice: HomeService){};
  books:any;
  is_buyer:any = true;
  is_admin:boolean = false;
  is_seller:boolean = false
  ngOnInit() {
    this.fatchData();
  };

  fatchData():void {
    this.homeservice.fatchbooks().subscribe((result) => {
      if(result){
        this.books = result;
      }
      else{
        console.log("Data not get")
      }
    })
  }

  fatchUserDetails():void{
    this.homeservice.fatchUserDetailss().subscribe((result:any) => {
      if(result){
        if(result['user_type'] == 'seller'){
          this.is_seller = true;
        }
        else if(result['user_type'] == 'admin'){
          this.is_admin = true;
        }

      }
     
    })
  }
}
