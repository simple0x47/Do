import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserRoleService } from "../auth-api/user-role/user-role.service";
import { Observable } from "rxjs";

@Injectable()
export class CanActivateAdmin implements CanActivate {
    constructor(private authApi: UserRoleService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authApi.isAdmin$;
    }
}