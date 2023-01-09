import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerHomeService } from './seller-home.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  constructor(private sellerhomeService:SellerHomeService, private router:Router){
    
  }

  // is_seller:boolean = false;
  // is_buyer:boolean = false;
  // is_admin:boolean = false;
  // users:any;

  ngOnInit() {}
  
  logout() {
    console.log("Logout call");
    this.sellerhomeService.logoutUser().subscribe(()=>{
      this.router.navigate([''])
    });
  }

  // fatchUserDetails():void{
  //   this.sellerhomeService.fatchUserDetails().subscribe((result:any) => {
  //     if(result){
  //       if(result['user_type'] == 'seller'){
  //         this.is_seller = true;
  //       }
  //       else if(result['user_type'] == 'admin'){
  //         this.is_admin = true;
  //         this.users = result['users'];
  //         console.log("users--->",this.users);
  //       }
        
  //     }
     
  //   })
  // }
}
