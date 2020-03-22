import { Component, OnInit, Output, EventEmitter, Input, NgModule } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})

export class MapComponent implements OnInit {
  zoom: Number = 18;
  @Input() lat: Number = 48.7791242;
  @Input() lng: Number = 9.0371322;
  @Input() editable = false;

  ngOnInit(): void {}
}
