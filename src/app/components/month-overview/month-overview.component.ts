import { Component, OnInit, Input, Output } from "@angular/core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-month-overview",
  templateUrl: "./month-overview.component.html",
  styleUrls: ["./month-overview.component.scss"]
})
export class MonthOverviewComponent implements OnInit {
  @Input() editable = false;
  @Input() months: number[] = [];
  table = [
    [
      { text: "Januar", active: false, index: 1 },
      { text: "Februar", active: false, index: 2 },
      { text: "März", active: false, index: 3 }
    ],
    [
      { text: "April", active: false, index: 4 },
      { text: "Mai", active: false, index: 5 },
      { text: "Juni", active: false, index: 6 }
    ],
    [
      { text: "Juli", active: false, index: 7 },
      { text: "August", active: false, index: 8 },
      { text: "September", active: false, index: 9 }
    ],
    [
      { text: "Oktober", active: false, index: 10 },
      { text: "November", active: false, index: 11 },
      { text: "Dezember", active: false, index: 12 }
    ]
  ];

  checkIcon = faCheck;
  crossIcon = faTimes;

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.months.length; i++) {
      const monthIndex = this.months[i];
      for (let row = 0; row < this.table.length; row++) {
        for (let col = 0; col < this.table[row].length; col++) {
          if (this.table[row][col].index === monthIndex) {
            this.table[row][col].active = true;
          }
        }
      }
    }
  }

  toggleActive(item) {
    if (this.editable) {
      item.active = !item.active;
    }
  }
}
