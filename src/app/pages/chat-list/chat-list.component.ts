import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Chat } from "src/app/models/chat.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.scss"]
})
export class ChatListComponent implements OnInit {
  chat$: Observable<Chat[]>;
  constructor(public api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.chat$ = this.api.getChats();
  }

  goToDetail(chat: Chat) {
    this.router.navigateByUrl(`/chat-detail/${chat.uid}`);
  }

}
