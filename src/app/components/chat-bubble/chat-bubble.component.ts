import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-chat-bubble",
  templateUrl: "./chat-bubble.component.html",
  styleUrls: ["./chat-bubble.component.scss"]
})
export class ChatBubbleComponent implements OnInit {
  @Input() message: String;
  @Input() time: String;
  @Input() type: String;

  constructor() {}

  ngOnInit(): void {}
}
