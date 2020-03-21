import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Observable } from "rxjs";
import { Project } from "src/app/models/project.model";

@Component({
  selector: "app-employee-home",
  templateUrl: "./employee-home.component.html",
  styleUrls: ["./employee-home.component.scss"]
})
export class EmployeeHomeComponent implements OnInit {
  projects$: Observable<Project[]>;
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.projects$ = this.api.getAppliedProjectList();
  }

  addTest() {
    this.api.addProject({
      displayName: "From Frontend",
      description: "Sample Description",
      startDate: new Date(),
      endDate: new Date(),
      maxEmployees: 4,
      farmerId: "X5MA1furiLNY7aVu6JI4BV1UoTg1",
      applicants: []
    });
  }
}
