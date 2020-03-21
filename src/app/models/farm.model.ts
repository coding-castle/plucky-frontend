export interface Farm {
  id: string;
  image?: string;
  applicants: string[];
  confirmedApplicants: string[];
  description: string;
  farmTags: string[];
  location: firebase.firestore.GeoPoint;
  member: string[];
  months: number[];
  name: string;
  productTags: string[];
  tasks: string[];
}

export interface FarmTag {
  id: string;
  icon: string;
  name: string;
}

export interface ProductTag {
  id: string;
  name: string;
}
