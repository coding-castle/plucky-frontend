import { User } from "./user.model";

export interface Chat {
  partner: User;
  messages: Message[];
  member: string[];
}

export interface Message {
  createdAt: firebase.firestore.Timestamp;
  message: string;
  uid: string;
}
