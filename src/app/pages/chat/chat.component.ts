import { Component, OnInit } from "@angular/core";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { Chat } from "src/app/models/chat.model";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  sendIcon = faPaperPlane;
  user: User;
  chat$: Observable<Chat[]>;
  partnerUid: string;
  userInput = "";

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.partnerUid = this.route.snapshot.paramMap.get("partnerUid");
    this.chat$ = this.api.getChats(this.partnerUid);
    this.chat$.subscribe(data => {
      console.log(data);
    });
    this.user = this.auth.user;
  }

  async onSendMessage() {
    if (this.userInput) {
      try {
        await this.api.sendChat(this.partnerUid, this.userInput);
        this.userInput = "";
      } catch (error) {
        console.log(error);
      }
    }
  }
}
