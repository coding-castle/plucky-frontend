import { Component, OnInit } from "@angular/core";
import {
  faWineGlassAlt,
  faLemon,
  faTree,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";
import { FarmTag } from "src/app/models/farm.model";

@Component({
  selector: "app-farmer-profile",
  templateUrl: "./farmer-profile.component.html",
  styleUrls: ["./farmer-profile.component.scss"]
})
export class FarmerProfileComponent implements OnInit {
  public editState = true;
  public profile = {
    image: "https://i.picsum.photos/id/149/100/100.jpg",
    displayName: "Gemüsehof Flotti Karotti bei Ravensburg",
    describtion: `Wir sind ein Familienunternehmen und dies seit über 40 Jahren. Wir bauen vor allem
    Obst und Gemüse an. Zu den beliebtesten
    Sorten gehören Erdbeern, Spargel, Salat,
    Mais und Getreide. Wir legen Wert auf ein
    freundliches Miteinander und sind stolz
    darauf Biobauern zu sein.`,
    ansprechpartner: "Sheldon Cooper"
  };

  public farmTags: FarmTag[] = [
    { icon: faLemon.iconName.toString(), name: "Obstbau", id: "obstbau" },
    { icon: faTree.iconName.toString(), name: "Gartenbau", id: "gartenbau" },
    { icon: faLeaf.iconName.toString(), name: "Biohof", id: "biohof" },
    { icon: faWineGlassAlt.iconName.toString(), name: "Weinbau", id: "weinbau" }
  ];
  constructor(public auth: AuthService) {}
  ngOnInit(): void {}
  changeEditState = () => {
    if (this.editState === true) {
      this.editState = false;
    } else {
      this.editState = true;
    }
  };
}
