import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-chat-bubble",
  templateUrl: "./chat-bubble.component.html",
  styleUrls: ["./chat-bubble.component.scss"]
})
export class ChatBubbleComponent implements OnInit {
  @Input() message: string;
  @Input() time: firebase.firestore.Timestamp;
  @Input() sender: boolean;

  constructor() {}

  ngOnInit(): void {}
}
