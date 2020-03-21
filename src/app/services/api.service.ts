import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Project } from "../models/project.model";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private afs: AngularFirestore, private auth: AuthService) {}

  /**
   * FARMER
   */

  public addProject(project: Project) {
    return this.afs.collection("projects").add(project);
  }
  public removeProject(id: string) {}
  public updateProject(id: string, project: Project) {}

  /**
   * STUDENTEN
   */

  public getProjects() {
    return this.afs.collection<Project>("projects").valueChanges();
  }

  public applyForProject() {
    // add employee id to project member list
  }

  public unapplyForProject() {
    // remove employee from project member list
  }

  public getAppliedProjectList() {
    return this.afs
      .collection<Project>("projects", ref =>
        ref.where("applicants", "array-contains", this.auth.user.uid)
      )
      .valueChanges();
  }
}
