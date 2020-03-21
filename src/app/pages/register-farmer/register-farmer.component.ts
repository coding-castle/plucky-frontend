import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-farmer",
  templateUrl: "./register-farmer.component.html",
  styleUrls: ["./register-farmer.component.scss"]
})
export class RegisterFarmerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onFarmerFeedClicked() {
    this.router.navigate(["/farmer-feed"]);
  }
}
