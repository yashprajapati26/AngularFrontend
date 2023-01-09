import { Component } from '@angular/core';
import { AdminHomeService } from './admin-home.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  constructor(private adminService: AdminHomeService){}

  ngOnInit() {
   this.fatchUserDetails()
  }

  users:any;

  fatchUserDetails():void{
    this.adminService.fatchUserDetails().subscribe((result:any) => {
      if(result){
          this.users = result['users']
      }
    })
  }




}
