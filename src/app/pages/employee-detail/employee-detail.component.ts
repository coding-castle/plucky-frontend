import { Component, OnInit, Input } from "@angular/core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.scss"]
})
export class EmployeeDetailComponent implements OnInit {
  locationIcon = faMapMarkerAlt;
  phoneIcon = faPhone;
  mailIcon = faEnvelope;
  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    let uid = this.route.snapshot.paramMap.get("uid");
    this.user$ = this.api.getProfile(uid);
  }
}
