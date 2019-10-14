import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AuthGuardService implements CanActivate{


    constructor(private router: Router, private storageServ : StorageService) {

    }
    
    canActivate() : boolean {

        let auth = this.storageServ.lsLogin();
        
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