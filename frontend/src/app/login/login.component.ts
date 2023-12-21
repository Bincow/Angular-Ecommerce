import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Mapper } from '../mapping/mapper';
import User, { UserType } from '../../../../backend/src/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {
      
    if (this.service.isloggedin()) {
      const userType = this.service.getrole();

      if (userType == '1')
        this.router.navigate(['shop']);

      if (userType == '0')
        this.router.navigate(['dashboard']);
    }
  }
  
loading = false;
result: any;

loginform = this.builder.group({
  email: this.builder.control('', Validators.required),
  password: this.builder.control('', Validators.required)
});

proceedlogin() {
  
  if (this.loginform.valid) {
    this.loading = true;
    
    this.service.getUserByLogin(this.loginform.value.email!, this.loginform.value.password!)
      .subscribe((response: any) => {
        try {
          const mappedResponse = Mapper.MapperUserResponse(response);
          sessionStorage.setItem('login', mappedResponse.user.login);
          sessionStorage.setItem('role', mappedResponse.user.type.toString());
          sessionStorage.setItem('profileName', mappedResponse.profile.name);
          if (mappedResponse.user.type == 0) {
            this.router.navigate(['/dashboard']);
          } else if (mappedResponse.user.type== 1) {
            this.router.navigate(['/shop']);
          } else {
            this.router.navigate(['/']);
            this.toastr.error('Tipo de usuário desconhecido');
          }

        } catch (error: any) {
          this.toastr.error(error.message || 'Erro desconhecido');
        }
      });
  } else {
    this.toastr.warning('Por favor, insira dados válidos.');
  }
}
}