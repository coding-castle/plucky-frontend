import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  faCarrot,
  faTractor,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) {}
  public icon = {
    infoCircle: faInfoCircle.iconName.toString(),
    carrot: faCarrot.iconName.toString(),
    tractor: faTractor.iconName.toString()
  };
  ngOnInit(): void {}

  login(type: "plucky" | "farmer") {
    this.router.navigateByUrl(`/landing/${type}`);
  }
}
