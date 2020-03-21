import { Component, OnInit } from "@angular/core";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { MatIconRegistry } from "@angular/material/icon";
import { EmployeeFeedComponent } from "src/app/pages/employee-feed/employee-feed.component";

@Component({
  selector: "app-bottom-nav",
  templateUrl: "./bottom-nav.component.html",
  styleUrls: ["./bottom-nav.component.scss"]
})
export class BottomNavComponent implements OnInit {
  options = [
    {
      icon: faAmbulance,
      name: "Feed",
      routerLink: ["/farmer-feed"] // TODO Adjust route according to user type (farmer/employee)
    },
    {
      icon: faAmbulance,
      name: "Profile",
      routerLink: ["/farmer-profile"] // TODO Adjust route according to user type (farmer/employee)
    },
    {
      icon: faAmbulance,
      name: "Chat",
      routerLink: ["/chat"]
    },
    {
      icon: faAmbulance,
      name: "Todo",
      routerLink: ["/todo"]
    }
  ];

  constructor(private iconRegistry: MatIconRegistry) {
    // iconRegistry.classNameForFontAlias("fa");
    iconRegistry.setDefaultFontSetClass("fa");
  }

  ngOnInit(): void {}
}
