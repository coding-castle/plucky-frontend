import { Component, OnInit, Input } from "@angular/core";
import {
  faWineGlassAlt,
  faLemon,
  faTree,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-profile-farm",
  templateUrl: "./profile-farm.component.html",
  styleUrls: ["./profile-farm.component.scss"]
})
export class ProfileFarmComponent implements OnInit {
  @Input() editState: boolean;
  @Input() profile: string;
  @Input() farm: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.farm);
  }
}
