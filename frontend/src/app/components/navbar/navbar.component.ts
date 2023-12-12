import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { CartService } from '../../cartservice.service';
import { Router } from '@angular/router';


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

  constructor(private cartService: CartService, private router: Router){}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.length;
    });
  }

  openCart(){
    this.router.navigateByUrl('/cart')
  }

  logOut(this: any): void {
    this.router.navigateByUrl('/login');
  }
}
