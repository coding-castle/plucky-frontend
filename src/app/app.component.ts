import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private iconRegistry: MatIconRegistry) {
    // iconRegistry.classNameForFontAlias("fa");
    iconRegistry.setDefaultFontSetClass("fa");
  }
}
