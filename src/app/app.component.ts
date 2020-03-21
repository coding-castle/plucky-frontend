import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  faCoffee = faAmbulance;
  constructor(private iconRegistry: MatIconRegistry) {
    // iconRegistry.classNameForFontAlias("fa");
    iconRegistry.setDefaultFontSetClass("fa");
  }
}
