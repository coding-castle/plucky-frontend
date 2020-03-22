import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  @Input() title: string;
  @Input() galleryItems: { image: string; name: string; url: string }[];
  @Input() findMoreRoute: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToItem(item) {
    this.router.navigateByUrl(item.url);
  }

  onFindMoreClicked() {
    this.router.navigate([this.findMoreRoute]);
  }
}
