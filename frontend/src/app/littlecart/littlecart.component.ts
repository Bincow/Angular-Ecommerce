import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { _isNumberValue } from '@angular/cdk/coercion';

export enum PaymentType {
  CreditCard = 0,
  DebitCard = 1,
  Pix = 2,
  Boleto = 3
}

@Component({
  selector: 'app-littlecart',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  templateUrl: './littlecart.component.html',
  styleUrl: './littlecart.component.scss'
})
export class LittlecartComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  selectedPaymentType: PaymentType | undefined; // Variável para armazenar o tipo de pagamento selecionado
  paymentTypes = Object.keys(PaymentType).filter(keys => isNaN(Number.parseInt(keys)));


  constructor(private _formBuilder: FormBuilder) {}
}
