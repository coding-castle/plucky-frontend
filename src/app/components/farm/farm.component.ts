import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Farm } from "src/app/models/farm.model";

@Component({
  selector: "app-farm",
  templateUrl: "./farm.component.html",
  styleUrls: ["./farm.component.scss"]
})
export class FarmComponent implements OnInit {
  @Input() farm: Farm;
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  goToDetail() {
    this.clickEvent.emit();
  }
}
