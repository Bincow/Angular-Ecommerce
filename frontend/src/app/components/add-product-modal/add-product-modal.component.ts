import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductService } from '../../service/product.service';
import { Mapper } from '../../mapping/mapper';
import { ToastrService } from 'ngx-toastr';
import { ProductDTO } from '../../service/_config';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,ReactiveFormsModule,MatInputModule ],
})
export class AddProductModalComponent {


  constructor(
    public dialogRef: MatDialogRef<AddProductModalComponent>,
    private service: ProductService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  productForm!: FormGroup;
  isUpdated: boolean = false;

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: [this.data ? this.data.id : ''],
      name: [this.data ? this.data.name : '', Validators.required],
      price: [this.data ? this.data.price : '', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]+)?$')]],
      quantity: [this.data ? this.data.quantity : '', [Validators.required, Validators.pattern('^[0-9]*$')]],
      types: [this.data ? this.data.types : []],
      image: [this.data ? this.data.image : '']
    });

    this.isUpdated = this.data != null ? true : false ;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      
      if(this.isUpdated){
        const dto:ProductDTO = {
          id: this.productForm.value.id,
          name: this.productForm.value.name!,
          price: Number.parseFloat(this.productForm.value.price!),
          quantity: Number.parseInt(this.productForm.value.quantity!),
          types: this.productForm.value.types,
          image: this.productForm.value.image,
        }
        debugger;
        this.service.updateProduct(dto).subscribe(
          (response: any) => {
            try {
              const mappedResponse = Mapper.MapperProductResponse(response);
            } catch (error:any) {
              this.toastr.error(error.message || 'Erro desconhecido');
            }
          },
          (error) => {
            this.toastr.error('Erro ao obter produtos');
          }
        );
      }
      else{
        const dto:ProductDTO = {
          name: this.productForm.value.name!,
          price: Number.parseFloat(this.productForm.value.price!),
          quantity: Number.parseInt(this.productForm.value.quantity!),
          types: this.productForm.value.types,
          image: this.productForm.value.image,
        }
        this.service.insertProduct(dto).subscribe(
          (response: any) => {
            try {
              const mappedResponse = Mapper.MapperProductResponse(response);
            } catch (error:any) {
              this.toastr.error(error.message || 'Erro desconhecido');
            }
          },
          (error) => {
            this.toastr.error('Erro ao obter produtos');
          }
        );
      }

      this.dialogRef.close('success');
    }
  }
}
