import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-galery",
  templateUrl: "./galery.component.html",
  styleUrls: ["./galery.component.scss"]
})
export class GaleryComponent implements OnInit {
  @Input() title: String;
  @Input() galeryItems: Array<String>;
  @Input() findMoreRoute: String;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onFindMoreClicked() {
    this.router.navigate([this.findMoreRoute]);
  }
}
