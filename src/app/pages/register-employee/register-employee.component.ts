import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-register-employee",
  templateUrl: "./register-employee.component.html",
  styleUrls: ["./register-employee.component.scss"]
})
export class RegisterEmployeeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onEmployeeFeedClicked() {
    this.router.navigate(["/employee-feed"]);
  }
}
