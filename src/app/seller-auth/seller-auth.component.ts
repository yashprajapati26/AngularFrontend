import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerAuthService } from './seller-auth.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private sellerauthservice:SellerAuthService,private router:Router) {}

  ngOnInit() {}

  msg:any;

  seller_Signup(data:object):void {
    console.log(data);
    
    this.sellerauthservice.SellerSignup(data).subscribe((result:any)=>{
        console.log(result);
        if(result["code"]=="ER_DUP_ENTRY"){
          this.msg = "This email is already register."
        }
        if(result){
          this.router.navigate(['seller_home'])  // for redirect on seller_home url
          
        }
        console.log("done...")
      });
  }
}
