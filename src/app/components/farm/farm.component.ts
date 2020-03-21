import { Component, OnInit, Input } from "@angular/core";
import { Farm } from "src/app/models/farm.model";

@Component({
  selector: "app-project",
  templateUrl: "./farm.component.html",
  styleUrls: ["./farm.component.scss"]
})
export class FarmComponent implements OnInit {
  @Input() farm: Farm;

  constructor() {}

  ngOnInit(): void {}
}
