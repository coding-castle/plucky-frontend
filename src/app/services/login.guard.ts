import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { take, map } from "rxjs/operators";
import { Role } from "../models/role.enum";

@Injectable({
  providedIn: "root"
})
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.user$.pipe(
      take(1),
      map(user => {
        // only allow unathenticated users to access routes
        // check if logged in
        if (!!user) {
          console.log("already logged in, redirecting...");
          if (user.type === Role.Farmer) {
            this.router.navigateByUrl("/farmer");
          } else if (user.type === Role.Plucky) {
            this.router.navigateByUrl("/employee");
          }
          return false;
        }
        // if not authenticated dont allow
        return true;
      })
    );
  }
}
