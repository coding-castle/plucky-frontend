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
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-farmer-profile",
  templateUrl: "./farmer-profile.component.html",
  styleUrls: ["./farmer-profile.component.scss"]
})
export class FarmerProfileComponent implements OnInit {
  public editState = false;
  editFarm: Farm;
  resetFarm: Farm;
  editOwner: User;
  resetOwner: User;
  error = "";
  isNewFarm;

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
      if (user && user.uid) {
        this.farms$ = this.api.getFarmByUser(this.auth.user?.uid);
        // In this component Farmer Profile the authenticated user is also the owner of the farm
        this.editOwner = Object.assign({}, user);
        this.resetOwner = Object.assign({}, user);
        this.farms$.subscribe(data => {
          if (data && data.length > 0) {
            this.editFarm = data[0];
            this.resetFarm = Object.assign({}, data[0]);
            this.isNewFarm = false;
          } else if (data && data.length === 0) {
            // create a new farm
            // add the current uid to the new farm members
            const farm: Farm = {
              applicants: [],
              confirmedApplicants: [],
              description: "",
              name: "",
              farmTags: [],
              member: [user.uid],
              productTags: [],
              image: "https://i.pravatar.cc/300",
              tasks: [],
              months: [],
              location: null,
              id: null
            };
            this.editFarm = farm;
            this.resetFarm = Object.assign({}, farm);
            this.isNewFarm = true;
            this.editState = true;
          }
        });
      }
    });
  }
  reset() {
    // deep copy
    this.editFarm = Object.assign({}, this.resetFarm);
    this.editOwner = Object.assign({}, this.resetOwner);
    this.error = "";
    this.setEditMode(false);
  }

  async update() {
    this.error = "";
    if (!this.editFarm.name) {
      // error
      this.error = "Der Name darf nicht leer sein";
      return;
    }
    if (!this.editFarm.description) {
      // error
      this.error = "Die Beschreibung darf nicht leer sein";
      return;
    }
    if (!this.editFarm.location) {
      this.error = "Der Ort muss definiert werden";
      return;
    }
    try {
      if (this.isNewFarm) {
        await this.api.addFarm(this.editFarm);
      } else {
        await this.api.updateFarm(this.editFarm.id, this.editFarm);
      }
      await this.api.updateProfile(this.editOwner);
    } catch (error) {
      console.log(error);
    }
    this.setEditMode(false);
  }

  setEditMode(edit: boolean) {
    this.editState = edit;
  }
}
