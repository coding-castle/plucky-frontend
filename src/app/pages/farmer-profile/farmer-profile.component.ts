import { Component, OnInit } from "@angular/core";
import {
  faWineGlassAlt,
  faLemon,
  faTree,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";

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

  public farm = {
    products: [
      { icon: faLemon, name: "Obstbau" },
      { icon: faTree, name: "Gartenbau" },
      { icon: faLeaf, name: "Biohof" },
      { icon: faWineGlassAlt, name: "Weinbau" }
    ]
  };
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
