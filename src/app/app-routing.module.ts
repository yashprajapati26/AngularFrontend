import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

const routes: Routes = [

  {
   path:'', 
   component: HomeComponent,
  },
  {
    path:'login', 
    component:LoginComponent,
  },
  {
    path:'seller_auth', 
    component:SellerAuthComponent,
  },
  {
    path:'seller_home',
    component:SellerHomeComponent,
  },
  {
    path:'add-book',
    component:AddBookComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'about-us',
    component:AboutusComponent,
  },
  {
    path:'admin-home',
    component:AdminHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
