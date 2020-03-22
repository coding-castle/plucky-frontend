import { Component, OnInit } from "@angular/core";
import {
  faHome,
  faUserCircle,
  faBook,
  faComments
} from "@fortawesome/free-solid-svg-icons";
import { MatIconRegistry } from "@angular/material/icon";
import { AuthService } from "src/app/services/auth.service";
import { Role } from "src/app/models/role.enum";

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
      routerLink: ["/chat-list"]
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
      if (user && user.type === Role.Farmer) {
        this.activeOptions = this.farmerOptions;
      } else if (user && user.type === Role.Plucky) {
        this.activeOptions = this.employeeOptions;
      }
    });
  }

  ngOnInit(): void {}
}
