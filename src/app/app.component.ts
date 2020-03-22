import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { Router, NavigationEnd } from "@angular/router";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
  faWineGlassAlt,
  faLemon,
  faTree,
  faLeaf,
  faCarrot,
  faTractor,
  faInfoCircle,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  faCoffee = faAmbulance;
  showNav = false;
  showTopBox = false;
  showBotBox = false;
  showBackground = false;
  // Dont show bottom navigation if any of these routes are active
  dontShowRoutes = ["/landing", "/landing/plucky", "/landing/farmer"];

  // Show Top box in these routes
  topShowRoutes = ["/landing", "/landing/plucky", "/landing/farmer"];

  // Show Bottom box in these routes
  botShowRoutes = ["/landing", "/landing/plucky", "/landing/farmer"];

  constructor(private library: FaIconLibrary, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.dontShowRoutes.includes(router.url)) {
          this.showNav = false;
        } else {
          this.showNav = true;
        }

        if (this.topShowRoutes.includes(router.url)) {
          this.showTopBox = true;
          this.showBackground = true;
        } else {
          this.showTopBox = false;
          this.showBackground = false;
        }

        if (this.botShowRoutes.includes(router.url)) {
          this.showBotBox = true;
        } else {
          this.showBotBox = false;
        }
      }
    });

    // Import all needed icons here
    library.addIcons(
      faWineGlassAlt,
      faLemon,
      faTree,
      faLeaf,
      faCarrot,
      faTractor,
      faInfoCircle,
      faArrowRight
    );
  }
}
