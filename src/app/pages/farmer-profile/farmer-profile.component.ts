import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-farmer-profile",
  templateUrl: "./farmer-profile.component.html",
  styleUrls: ["./farmer-profile.component.scss"]
})
export class FarmerProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit(): void {}
}
