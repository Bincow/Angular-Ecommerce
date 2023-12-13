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
    private toastr: ToastrService
  ) {}

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]+)?$')]],
    quantity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    types: [[]],
    image: ['']
  });
  

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.productForm.valid) {
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

      this.dialogRef.close('success');
    }
  }
}
