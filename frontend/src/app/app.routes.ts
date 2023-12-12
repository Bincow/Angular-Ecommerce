import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


const DashboardGuard = (): boolean =>{
    return false;
}

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'shop', component: DashboardComponent},
    {path:'', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home Page'}

];
