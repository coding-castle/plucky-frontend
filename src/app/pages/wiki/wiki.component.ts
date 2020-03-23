import { Component, OnInit } from "@angular/core";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-wiki",
  templateUrl: "./wiki.component.html",
  styleUrls: ["./wiki.component.scss"]
})
export class WikiComponent implements OnInit {
  public chevronUp = faChevronUp;
  public chevronDown = faChevronDown;
  public plucky = true;
  public collapsed = true;
  public items = [
    {
      collapseState: true,
      image: "https://picsum.photos/300/300",
      title: "Spare dir das Fitnessstudio und mach am Abend Wellness",
      preBody: "Ich bin nur hier um dich zum Lesen zu bringen :D",
      body:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
