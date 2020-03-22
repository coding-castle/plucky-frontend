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
import { take, map, tap } from "rxjs/operators";
import { Role } from "../models/role.enum";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
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
        // check if logged in
        if (!!user) {
          // check if route is restricted by role
          if (next.data.roles && next.data.roles.indexOf(user.type) === -1) {
            // role not authorised so redirect to home page
            console.log(
              "user is logged in but not authorized to access this route, redirecting..."
            );
            if (user.type === Role.Farmer) {
              this.router.navigate(["/farmer"]);
            } else if (user.type === Role.Plucky) {
              this.router.navigate(["/employee"]);
            }
            return false;
          }

          // authorised so return true
          return true;
        }
        // if not authenticated dont allow
        console.log("not logged in, redirecting...");
        this.router.navigateByUrl("/");
        return false;
      })
    );
  }
}
