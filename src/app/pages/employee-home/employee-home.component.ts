import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Observable } from "rxjs";
import { Farm } from "src/app/models/farm.model";
import * as firebase from "firebase";

@Component({
  selector: "app-employee-home",
  templateUrl: "./employee-home.component.html",
  styleUrls: ["./employee-home.component.scss"]
})
export class EmployeeHomeComponent implements OnInit {
  farm$: Observable<Farm[]>;
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.farm$ = this.api.getFarms();
  }

  addTest() {
    this.api.addFarm({
      id: null,
      confirmedApplicants: [],
      description: "This is a sample farm",
      name: "Sample Farm",
      farmTags: [],
      location: new firebase.firestore.GeoPoint(10, 10),
      member: [],
      months: [],
      productTags: [],
      tasks: [],
      applicants: []
    });
  }
}
