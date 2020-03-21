import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Project } from "../models/project.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private afs: AngularFirestore) {}

  public getProjects() {
    return this.afs.collection<Project>("projects").valueChanges();
  }

  public addProject(project: Project) {
    return this.afs.collection("projects").add(project);
  }
}
