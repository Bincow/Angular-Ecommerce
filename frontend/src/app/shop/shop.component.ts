import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

  products:any[] = [
    {
      Id:'65716f234f73a2ad083c6ad9', 
      name:  "Capinha",
      price:  10,
      quantity:  2,
      types:  null,
      image:  null
    },
    {
      Id:'657171474f73a2ad083c6ada', 
      name:  "Capinha 2",
      price:  10,
      quantity:  30,
      types:  [0,1],
      image:  null
    },
  ] 


}
