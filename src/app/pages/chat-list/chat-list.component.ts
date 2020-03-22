import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.scss"]
})
export class ChatListComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {}
}
