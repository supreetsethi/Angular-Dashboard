import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { AuthenRepository } from '../authenRepository.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuardUnit {

    constructor(private authenRepository: AuthenRepository, private router: Router) { }
    canActivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
            if(this.authenRepository.IsAuthenticated()){
            
                if(this.authenRepository.GetUnit()){
                    return true;
                }else{
                    this.router.navigate(['/changeUnit']);
                    return true;
                }
                
            }else{
                localStorage.clear();
                this.router.navigate(['/login']);
                return false; 
            }
    }
    
}