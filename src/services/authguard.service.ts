import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate{

    
    
    constructor(private router: Router) {

    }
    
    canActivate() : boolean {
        
        let authInfo = {
            authenticated: false
        };''

        if (!authInfo.authenticated) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }

}