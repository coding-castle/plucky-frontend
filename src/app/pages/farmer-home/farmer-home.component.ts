import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-farmer-home",
  templateUrl: "./farmer-home.component.html",
  styleUrls: ["./farmer-home.component.scss"]
})
export class FarmerHomeComponent implements OnInit {
  public title = "Registrierte Pluckies";
  public nextStepTitle = "Nächste Schritte";
  public nexStepBody = [
    { state: true, text: "Leg dein Profil an" },
    { state: true, text: "Finde Pluckies in deiner Nähe" },
    { state: true, text: "Schreibe einem Plucky im Chat" },
    { state: false, text: "Informiere dich über unsere initiative" }
  ];
  constructor() {}

  ngOnInit(): void {}
}
