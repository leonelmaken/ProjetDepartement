import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalVariables } from '../global-variable';

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuard implements CanActivate {

    constructor(private param: GlobalVariables, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

            if (!this.param.isConnected) {
                alert("Veullez d'abord vous connecter");
                this.router.navigate(['connexion']);
                return false;
            }

        return true;
    }

}
