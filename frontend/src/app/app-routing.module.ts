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
import { MypurchaseComponent } from './mypurchase/mypurchase.component';


const routes: Routes = [
 {title:'Login',component:LoginComponent,path:'login'},
 {title:'Home',component:HomeComponent,path:'home'},
 {path:'', redirectTo:'home', pathMatch: 'full'},
 {title:'DashBoard',component:DashboardComponent,path:'dashboard',canActivate:[AuthGuard]},
 {title:'Shop',component:ShopComponent,path:'shop'},
 {title:'Carrinho',component:LittlecartComponent,path:'cart',canActivate:[AuthGuard]},
 {title:'Minhas Compras',component:MypurchaseComponent,path:'mypurchase',canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }