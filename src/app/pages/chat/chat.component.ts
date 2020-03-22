import { Component, OnInit } from "@angular/core";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  sendIcon = faPaperPlane;
  chat = [
    {
      title: "Test",
      message: "This is a test message",
      type: "chat-bubble-left"
    },
    {
      title: "Test",
      message: "This is a test message",
      type: "chat-bubble-right"
    },
    {
      title: "Test",
      message: "This is a test message",
      type: "chat-bubble-left"
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onSendMessage(input) {
    this.chat.push({
      title: "Test",
      message: input,
      type: "chat-bubble-right"
    });
    // TODO Dispatch message
  }
}
