import { Component, OnInit } from "@angular/core";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { Chat } from "src/app/models/chat.model";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { switchMap, first } from "rxjs/operators";

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
    this.user = this.auth.user;
    this.asyncInit();
  }

  async asyncInit() {
    const chat = await this.api
      .getChats(this.partnerUid)
      .pipe(first())
      .toPromise();
    if (chat.length === 0) {
      // create new one
      await this.api.createChat(this.partnerUid);
    }
    this.chat$ = this.api.getChats(this.partnerUid).pipe(
      switchMap(async data => {
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          element.partner = await this.api.getProfilePromise(this.partnerUid);
        }
        console.log(data);
        return data;
      })
    );
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
