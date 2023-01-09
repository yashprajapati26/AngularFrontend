import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService,private router:Router) {};

  ngOnInit() {};

  msg:any;
  
  user_login(data:object):void{
    this.loginService.userLogin(data).subscribe((result:any)=>{
     
      if(result["user_type"]=="buyer"){
        console.log(result)
        this.router.navigate([''])
      }
      else if(result["user_type"]=="admin"){
        console.log(result)
        this.router.navigate(['admin-home'])
      }
      else if(result["user_type"]=="seller"){
        console.log(result)
        this.router.navigate(['seller_home'])
      }
      else{
        console.log(result)
        this.msg = result["msg"]
        this.router.navigate([''])

      }
    })
  }
}
