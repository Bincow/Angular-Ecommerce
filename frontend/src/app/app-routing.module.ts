import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LittlecartComponent } from './littlecart/littlecart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
 {component:LoginComponent,path:'login'},
 {component:HomeComponent,path:'home'},
 {path:'', redirectTo:'home', pathMatch: 'full'},
 {component:DashboardComponent,path:'dashboard',canActivate:[AuthGuard]},
 {component:ShopComponent,path:'shop',canActivate:[AuthGuard]},
 {component:LittlecartComponent,path:'cart',canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }