import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { UserType } from '../../../../backend/src/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router,private tostr:ToastrService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    if (this.service.isloggedin()) {
      const userType = this.service.getrole(); // Obtém o tipo de usuário armazenado na sessão
      // Verifica se o usuário é do tipo 'User' e redireciona para as páginas permitidas
      if (userType == '1') {
        const allowedRoutes = ['shop', 'cart']; // Rotas permitidas para o tipo 'User'
        const requestedRoute = route.url[0].path; // Obtém a rota que está sendo acessada
        console.warn(allowedRoutes.includes(requestedRoute))
        if (allowedRoutes.includes(requestedRoute)) {
          return true; // Permite o acesso se a rota está entre as permitidas para 'User'
        } else {
          this.router.navigate(['/shop']); // Redireciona para a página inicial se a rota não for permitida
          return false;
        }
      }

      if (userType == '0') {
        const allowedRoutes = ['dashboard'];
        const requestedRoute = route.url[0].path;
  
        if (requestedRoute === 'dashboard') {
          return true; // Permite o acesso à rota 'dashboard' para o tipo 'Admin'
        } else {
          this.router.navigate(['/']); // Redireciona para a página inicial se a rota não for 'dashboard'
          return false;
        }
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}