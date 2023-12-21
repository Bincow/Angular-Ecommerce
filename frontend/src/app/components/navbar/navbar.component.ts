import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenu, MatMenuModule, MatMenuPanel} from '@angular/material/menu';
import { CartService } from '../../cartservice.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,
    MatBadgeModule, 
    MatButtonModule, 
    MatIconModule,
    MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  cartItemCount: number = 0;
  loggedIn: boolean = false;
  profileLogged: MatMenuPanel<any> | null = null;
  profileNotLogged: MatMenuPanel<any> | null = null;
  profileName: string|null|undefined = sessionStorage.getItem('profileName')?.split(' ')[0];

  constructor(private cartService: CartService, private router: Router, private auth:AuthService){
    this.isLogged();
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.length;
    });
  }

  openShop(){
    this.router.navigateByUrl('/shop')
  }
  openCart(){
    this.router.navigateByUrl('/cart')
  }
  openMyPurchase(){
    this.router.navigateByUrl('/mypurchase');
  }

  login(): void {
    this.router.navigateByUrl('/login');
  }
  logOut(this: any): void {
    sessionStorage.clear();
    location.reload();
    
  }
  

  isLogged():void{
    this.loggedIn = this.auth.isloggedin();
  }

  
}
