import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



enum ProductType {
  Transparent = 0,
  Filled = 1,
  Holographic = 2,
  Anime = 3,
  Simple = 4,
}

export interface Product {
   id: string,
   name: string,
   price: number,
   quantity: number,
   types: ProductType[],
   image: string 
}

const ELEMENT_DATA: Product[] = [
  {
    id:'65716f234f73a2ad083c6ad9', 
    name:  "Capinha",
    price:  10,
    quantity:  2,
    types:  [ProductType.Holographic, ProductType.Anime],
    image:  'https://otakuninjas.com/cdn/shop/files/reditachi.webp?v=1694865985'
  },
  {
    id:'657171474f73a2ad083c6ada', 
    name:  "Capinha 2",
    price:  10,
    quantity:  30,
    types:  [0,1],
    image:  ''
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity','types','image','action'];
  dataSource = ELEMENT_DATA;
}
