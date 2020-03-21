import { Component, OnInit, Input } from "@angular/core";
import { faCheckCircle, faCircle } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-checklist",
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.scss"]
})
export class ChecklistComponent implements OnInit {
  @Input() title: String;
  @Input() listItems: Array<String>;
  public circle = faCircle;
  public circleCheck = faCheckCircle;
  constructor() {}

  ngOnInit(): void {}
}
