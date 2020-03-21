import { Component, OnInit, Input, Output } from "@angular/core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-month-overview",
  templateUrl: "./month-overview.component.html",
  styleUrls: ["./month-overview.component.scss"]
})
export class MonthOverviewComponent implements OnInit {
  @Input() editable = false;
  @Output() table = [
    [
      { text: "Januar", active: false },
      { text: "Februar", active: false },
      { text: "März", active: false }
    ],
    [
      { text: "April", active: false },
      { text: "Mai", active: false },
      { text: "Juni", active: false }
    ],
    [
      { text: "Juli", active: false },
      { text: "August", active: false },
      { text: "September", active: false }
    ],
    [
      { text: "Oktober", active: false },
      { text: "November", active: false },
      { text: "Dezember", active: false }
    ]
  ];

  checkIcon = faCheck;
  crossIcon = faTimes;

  constructor() {}

  ngOnInit(): void {}

  toggleActive(item) {
    item.active = !item.active;
  }
}
