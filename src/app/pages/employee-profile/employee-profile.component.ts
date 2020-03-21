import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee-profile",
  templateUrl: "./employee-profile.component.html",
  styleUrls: ["./employee-profile.component.scss"]
})
export class EmployeeProfileComponent implements OnInit {
  name = "Lorem Ipsum";
  email = "lorem@ipsum.de";
  phone = "+49 1234 5678910";
  location = "Deutschland";

  constructor() {}

  ngOnInit(): void {}
}
