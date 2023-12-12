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

  products:any = [];

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
