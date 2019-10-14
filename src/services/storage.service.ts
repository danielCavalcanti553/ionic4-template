import { Injectable } from "@angular/core";
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';

@Injectable()
export class StorageService{
    
    constructor(){
    }

    setLocalUser(user : any){
        let stringJson = JSON.stringify(user);
        localStorage.setItem('USER', stringJson);
    }

    getLocalUser(){
        let user = localStorage.getItem('USER');
        return user;
    }

    clearLocalUser(){
        localStorage.setItem('USER', '');
    }

    lsLogin() : boolean{
        
        if(localStorage.getItem('USER')==null){
            return false;
        }else if(localStorage.getItem('USER')==""){
            return false;
        }else{
            return true;
        }
    }


}