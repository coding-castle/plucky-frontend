import { Component, OnInit } from "@angular/core";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  sendIcon = faPaperPlane;
  user = "User";
  chat = [
    {
      message: "This is a test message",
      type: "chat-bubble-left",
      time: "00:00"
    },
    {
      message: "This is a test message",
      type: "chat-bubble-right",
      time: "00:00"
    },
    {
      message: "This is a test message",
      type: "chat-bubble-left",
      time: "00:00"
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onSendMessage(input) {
    this.chat.push({
      message: input,
      type: "chat-bubble-right",
      time: "00:00"
    });
    // TODO Dispatch message
  }
}
