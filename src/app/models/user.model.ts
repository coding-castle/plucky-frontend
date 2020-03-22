export interface User {
  uid: string;
  email: string;
  photoUrl: string;
  displayName: string;
  type: "plucky" | "farmer";
  travelRange: number;
  location: string;
  phone: string;
  months: number[];
}
