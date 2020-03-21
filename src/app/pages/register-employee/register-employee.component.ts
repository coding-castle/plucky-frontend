import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register-employee",
  templateUrl: "./register-employee.component.html",
  styleUrls: ["./register-employee.component.scss"]
})
export class RegisterEmployeeComponent implements OnInit {
  constructor(private router: Router, public auth: AuthService) {}

  ngOnInit(): void {}

  onEmployeeFeedClicked() {
    this.router.navigate(["/employee-feed"]);
  }
}
