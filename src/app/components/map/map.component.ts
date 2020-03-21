import { Component, OnInit, Output, EventEmitter, Input, NgModule } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})

export class MapComponent implements OnInit {
  zoom: Number = 18;
  @Input() lat: Number = 0;
  @Input() lng: Number = 0;

  ngOnInit(): void {}
}
