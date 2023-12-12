import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';
import { GetProductByIdParams } from '../../../../backend/src/models/product';
import { response } from 'express';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})


export class ShopComponent implements OnInit{

  products:any = [{
    id:'65716f234f73a2ad083c6ad9', 
    name:  "Capinha",
    price:  10,
    quantity:  2,
    types:  [0,1],
    image:  'https://otakuninjas.com/cdn/shop/files/reditachi.webp?v=1694865985'
  },
  {
    id:'657171474f73a2ad083c6ada', 
    name:  "Capinha 2",
    price:  10,
    quantity:  30,
    types:  [0,1],
    image:  ''
  }];

  constructor(private apiService: RestService){}


ngOnInit(): void {
    this.loadProductsDetails
}

loadProductsDetails(): void{
  this.apiService.getData().subscribe(
    {
    next: (response) => {
      console.log('Response from server: ', response);
      this.products = response;
    },
    error: (error) => {
      alert('Erro ao tentar carregar produtos: ' + error);
    }
  });
}

}
