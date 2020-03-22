import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user$: Observable<User>;
  user: User;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.user$.subscribe(data => {
      this.user = data;
    });
  }

  async emailLogin(email, password) {
    const credential = await this.afAuth.signInWithEmailAndPassword(
      email,
      password
    );
    // return this.updateUserData({
    //   uid: credential.user.uid,
    //   displayName: name,
    //   email: credential.user.email
    // });
  }

  async emailRegister(email, name, password, type) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    return this.updateUserData({
      uid: credential.user.uid,
      displayName: name,
      email: credential.user.email,
      type: type
    });
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigateByUrl("/");
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      type: user.type,
      location: "",
      months: [],
      phone: "",
      photoUrl: "",
      travelRange: 0,
      city: ""
    };

    return userRef.set(data, { merge: true });
  }
}
