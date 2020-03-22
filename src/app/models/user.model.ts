import { Role } from "./role.enum";

export interface User {
  uid: string;
  email: string;
  photoUrl: string;
  displayName: string;
  type: Role;
  travelRange: number;
  location: string;
  phone: string;
  months: number[];
  city: string;
}
