import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import {
  AngularFireStorage,
  AngularFireStorageReference
} from "@angular/fire/storage";
import { switchMap, tap, finalize } from "rxjs/operators";
import { Observable, combineLatest, of } from "rxjs";
import { Farm, FarmTag } from "../models/farm.model";
import { AuthService } from "./auth.service";
import { User } from "../models/user.model";
import { Chat } from "../models/chat.model";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
    private storage: AngularFireStorage
  ) {}

  async addFarm(farm: Farm): Promise<void> {
    const done = await this.afs.collection<Farm>("farms").add(farm);
    return this.afs.doc(`farms/${done.id}`).update({ id: done.id });
  }

  updateFarm(farmId: string, farm: Farm): Promise<void> {
    return this.afs.doc<Farm>(`farms/${farmId}`).set(farm, { merge: true });
  }

  getProfile(uid: string): Observable<User> {
    // get applicant profile
    return this.afs.doc<User>(`users/${uid}`).valueChanges();
  }

  getFarm(farmId: string): Observable<Farm> {
    // get farm from farm members
    return this.afs.doc<Farm>(`farms/${farmId}`).valueChanges();
  }

  getFarmTags(tagIds: string[]): Observable<FarmTag[]> {
    if (tagIds.length > 0) {
      return this.afs
        .collection<FarmTag>("farmTags", ref => ref.where("id", "in", tagIds))
        .valueChanges();
    } else {
      return of(null);
    }
  }

  getAllTags(): Observable<FarmTag[]> {
    return this.afs.collection<FarmTag>("farmTags").valueChanges();
  }

  getFarmByUser(uid: string): Observable<Farm[]> {
    return this.afs
      .collection<Farm>("farms", ref =>
        ref.where("member", "array-contains", uid).limit(1)
      )
      .valueChanges();
  }

  acceptApplicant(applicantUid: string, farmId: string): Promise<void> {
    // accept an applicant into confirmed applicants
    return this.afs.doc(`farms/${farmId}`).update({
      confirmedApplicants: firebase.firestore.FieldValue.arrayUnion(
        applicantUid
      )
    });
  }

  getApplicantsForFarm(farm: Farm) {
    if (farm.applicants.length > 0) {
      return this.afs
        .collection<User>("users", ref =>
          ref.where("uid", "in", farm.applicants)
        )
        .valueChanges();
    } else {
      return of(null);
    }
  }

  removeApplicant(applicantUid: string, farmId: string): Promise<void> {
    return this.afs.doc(`farms/${farmId}`).update({
      confirmedApplicants: firebase.firestore.FieldValue.arrayRemove(
        applicantUid
      )
    });
  }

  getFarms(): Observable<Farm[]> {
    // add filters like months, name, location radius
    return this.afs.collection<Farm>("farms").valueChanges();
  }

  getChats(): Observable<Chat[]> {
    // add filters like months, name, location radius
    return this.afs.collection<Chat>("chats").valueChanges();
  }

  applyToFarm(farmId: string): Promise<void> {
    // add employee id to applicants
    return this.afs.doc(`farms/${farmId}`).update({
      applicants: firebase.firestore.FieldValue.arrayUnion(this.auth.user.uid)
    });
  }

  unapplyForProject(farmId: string): Promise<void> {
    // remove employee from applicants or confirmedApplicants
    return this.afs.doc(`farms/${farmId}`).update({
      applicants: firebase.firestore.FieldValue.arrayRemove(this.auth.user.uid)
    });
  }

  // Get list of applications for farms for current authenticated user
  getAppliedFarmList(): Observable<[Farm[], Farm[]]> {
    return combineLatest(
      this.afs
        .collection<Farm>("farms", ref =>
          ref.where("applicants", "array-contains", this.auth.user.uid)
        )
        .valueChanges(),
      this.afs
        .collection<Farm>("farms", ref =>
          ref.where("confirmedApplicants", "array-contains", this.auth.user.uid)
        )
        .valueChanges()
    );
  }

  updateProfile(user: Partial<User>): Promise<void> {
    return this.afs.doc(`users/${this.auth.user.uid}`).update(user);
  }

  async uploadImage(file) {
    const path = `assets/${Date.now()}_${file.name}`;
    const ref = this.storage.ref(path);
    const result = await ref.put(file);
    const url = await result.ref.getDownloadURL();
    return url;
  }

  // TODO
  listPluckies() {}
}
