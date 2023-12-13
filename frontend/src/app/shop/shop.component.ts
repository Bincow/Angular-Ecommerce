import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ToastrService } from 'ngx-toastr';
import { Mapper } from '../mapping/mapper';
import { ProductDTO } from '../service/_config';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: ProductDTO[] = []; 

  constructor(private service: ProductService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getAllProducts(); 
  }

  getAllProducts(): void {
    this.service.getAllProducts().subscribe(
      (response: any) => {
        try {
          const mappedResponse = Mapper.MapperProductListResponse(response);
          this.products = mappedResponse; 
        } catch (error:any) {
          this.toastr.error(error.message || 'Erro desconhecido');
        }
      },
      (error) => {
        this.toastr.error('Erro ao obter produtos');
      }
    );
  }
}
