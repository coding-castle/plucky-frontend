import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  faCoffee = faAmbulance;
  showNav = false;
  // Dont show bottom navigation if any of these routes are active
  dontShowRoutes = ["/landing", "/landing/plucky", "/landing/farmer"];
  constructor(private iconRegistry: MatIconRegistry, private router: Router) {
    // iconRegistry.classNameForFontAlias("fa");
    iconRegistry.setDefaultFontSetClass("fa");
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.dontShowRoutes.includes(router.url)) {
          this.showNav = false;
        } else {
          this.showNav = true;
        }
      }
    });
  }
}
