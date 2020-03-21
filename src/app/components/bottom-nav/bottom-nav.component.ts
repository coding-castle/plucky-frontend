import { Component, OnInit } from "@angular/core";
import {
  faHome,
  faUser,
  faCheck,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { MatIconRegistry } from "@angular/material/icon";
import { EmployeeFeedComponent } from "src/app/pages/employee-feed/employee-feed.component";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-bottom-nav",
  templateUrl: "./bottom-nav.component.html",
  styleUrls: ["./bottom-nav.component.scss"]
})
export class BottomNavComponent implements OnInit {
  farmerOptions = [
    {
      icon: faHome,
      name: "Home",
      routerLink: ["/farmer"] // TODO Adjust route according to user type (farmer/employee)
    },
    {
      icon: faUser,
      name: "Profile",
      routerLink: ["/farmer-profile"] // TODO Adjust route according to user type (farmer/employee)
    },
    {
      icon: faEnvelope,
      name: "Chat",
      routerLink: ["/chat"]
    },
    {
      icon: faCheck,
      name: "Todo",
      routerLink: ["/todo"]
    }
  ];

  employeeOptions = [
    {
      icon: faHome,
      name: "Home",
      routerLink: ["/employee"] // TODO Adjust route according to user type (farmer/employee)
    },
    {
      icon: faUser,
      name: "Profile",
      routerLink: ["/farmer-profile"] // TODO Adjust route according to user type (farmer/employee)
    },
    {
      icon: faEnvelope,
      name: "Chat",
      routerLink: ["/chat"]
    },
    {
      icon: faCheck,
      name: "Todo",
      routerLink: ["/todo"]
    }
  ];

  activeOptions;

  constructor(
    private iconRegistry: MatIconRegistry,
    private auth: AuthService
  ) {
    // iconRegistry.classNameForFontAlias("fa");
    iconRegistry.setDefaultFontSetClass("fa");
    auth.user$.subscribe(user => {
      console.log(user);
      if (user && user.type === "farmer") {
        this.activeOptions = this.farmerOptions;
      } else if (user && user.type === "plucky") {
        this.activeOptions = this.employeeOptions;
      }
    });
  }

  ngOnInit(): void {}
}
