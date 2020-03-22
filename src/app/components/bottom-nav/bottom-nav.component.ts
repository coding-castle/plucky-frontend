import { Component, OnInit } from "@angular/core";
import {
  faHome,
  faUserCircle,
  faBook,
  faComments
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
      icon: faUserCircle,
      name: "Profil",
      routerLink: ["/farmer-profile"] // TODO Adjust route according to user type (farmer/employee)
    },
    {
      icon: faComments,
      name: "Chat",
      routerLink: ["/chat-list"]
    },
    {
      icon: faBook,
      name: "Wiki",
      routerLink: ["/wiki"]
    }
  ];

  employeeOptions = [
    {
      icon: faHome,
      name: "Home",
      routerLink: ["/employee"] // TODO Adjust route according to user type (farmer/employee)
    },
    {
      icon: faUserCircle,
      name: "Profil",
      routerLink: ["/employee-profile"] // TODO Adjust route according to user type (farmer/employee)
    },
    {
      icon: faComments,
      name: "Chat",
      routerLink: ["/chat"]
    },
    {
      icon: faBook,
      name: "Wiki",
      routerLink: ["/wiki"]
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
