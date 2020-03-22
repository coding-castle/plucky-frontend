import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Farm } from "src/app/models/farm.model";
import { ApiService } from "src/app/services/api.service";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-farm-detail",
  templateUrl: "./farm-detail.component.html",
  styleUrls: ["./farm-detail.component.scss"]
})
export class FarmDetailComponent implements OnInit {
  farm$: Observable<Farm>;
  farm: Farm;
  owner$: Observable<User>;
  owner: User;
  faArrowRight = faArrowRight;

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
      // Get the Owner of the farm for contact infos
      if (this.farm) {
        this.owner$ = this.api.getProfile(this.farm.member[0]);
        this.owner$.subscribe(o => {
          this.owner = o;
        });
      }
    });
  }

  async apply() {
    await this.api.applyToFarm(this.farm.id);
  }

  async deregister() {
    await this.api.unapplyForProject(this.farm.id);
  }

  applied() {
    if (this.auth.user) {
      const uid = this.auth.user.uid;
      if (
        this.farm.applicants.includes(uid) ||
        this.farm.confirmedApplicants.includes(uid)
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
