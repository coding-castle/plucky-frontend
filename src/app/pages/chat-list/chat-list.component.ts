import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Chat } from "src/app/models/chat.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styleUrls: ["./chat-list.component.scss"]
})
export class ChatListComponent implements OnInit {
  chat$: Observable<Chat[]>;
  constructor(
    public api: ApiService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.chat$ = this.api.getChatList();
  }

  goToDetail(chat: Chat) {
    this.router.navigateByUrl(`/chat-detail/${chat.partner.uid}`);
  }
}
