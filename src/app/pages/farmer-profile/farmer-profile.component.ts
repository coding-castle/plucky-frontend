import { Component, OnInit } from "@angular/core";
import {
  faWineGlassAlt,
  faLemon,
  faTree,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";
import { FarmTag, Farm } from "src/app/models/farm.model";
import { ApiService } from "src/app/services/api.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-farmer-profile",
  templateUrl: "./farmer-profile.component.html",
  styleUrls: ["./farmer-profile.component.scss"]
})
export class FarmerProfileComponent implements OnInit {
  public editState = false;
  editFarm: Farm;
  resetFarm: Farm;

  public farmTags: FarmTag[] = [
    { icon: faLemon.iconName.toString(), name: "Obstbau", id: "obstbau" },
    { icon: faTree.iconName.toString(), name: "Gartenbau", id: "gartenbau" },
    { icon: faLeaf.iconName.toString(), name: "Biohof", id: "biohof" },
    { icon: faWineGlassAlt.iconName.toString(), name: "Weinbau", id: "weinbau" }
  ];

  farms$: Observable<Farm[]>;
  constructor(public auth: AuthService, private api: ApiService) {}
  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if (user.uid) {
        this.farms$ = this.api.getFarmByUser(this.auth.user?.uid);

        this.farms$.subscribe(data => {
          if (data && data.length > 0) {
            this.editFarm = data[0];
            this.resetFarm = data[0];
          }
        });
      }
    });
  }
  reset() {
    // deep copy
    this.editFarm = Object.assign({}, this.resetFarm);
    this.setEditMode(false);
  }

  async update() {
    console.log(this.editFarm);
    try {
      await this.api.updateFarm(this.editFarm.id, this.editFarm);
    } catch (error) {
      console.log(error);
    }
    this.setEditMode(false);
  }

  setEditMode(edit: boolean) {
    this.editState = edit;
  }
}
