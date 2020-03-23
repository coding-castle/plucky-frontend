import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Chat } from "src/app/models/chat.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { switchMap } from "rxjs/operators";

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
    this.chat$ = this.api.getChats().pipe(
      switchMap(async data => {
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const partnerUid = Object.keys(element.member).filter(
            uid => uid !== this.auth.user.uid
          )[0];
          element.partner = await this.api.getProfilePromise(partnerUid);
        }
        return data;
      })
    );
  }

  goToDetail(chat: Chat) {
    this.router.navigateByUrl(`/chat/${chat.partner.uid}`);
  }
}
