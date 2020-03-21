import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Farm } from "src/app/models/farm.model";
import { ApiService } from "src/app/services/api.service";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-farm-detail",
  templateUrl: "./farm-detail.component.html",
  styleUrls: ["./farm-detail.component.scss"]
})
export class FarmDetailComponent implements OnInit {
  farm$: Observable<Farm>;
  farm: Farm;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const farmId = this.route.snapshot.paramMap.get("id");
    this.fetchDetail(farmId);
  }

  fetchDetail(id: string) {
    this.farm$ = this.api.getFarm(id);
    this.farm$.subscribe(data => {
      this.farm = data;
    });
  }

  async apply() {
    await this.api.applyToFarm(this.farm.id);
  }

  async deregister() {
    await this.api.unapplyForProject(this.farm.id);
  }

  applied() {
    const uid = this.auth.user.uid;
    if (
      this.farm.applicants.includes(uid) ||
      this.farm.confirmedApplicants.includes(uid)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
