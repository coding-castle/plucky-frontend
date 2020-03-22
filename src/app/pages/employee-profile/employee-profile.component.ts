import { Component, OnInit } from "@angular/core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { ApiService } from "src/app/services/api.service";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-employee-profile",
  templateUrl: "./employee-profile.component.html",
  styleUrls: ["./employee-profile.component.scss"]
})
export class EmployeeProfileComponent implements OnInit {
  editUser: User;
  editMode = false;
  faCamera = faCamera;

  constructor(public auth: AuthService, private api: ApiService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(data => {
      if (data) {
        this.editUser = data;
      }
    });
  }

  reset() {
    const user = this.auth.user;
    if (user) {
      // deep copy
      this.editUser = Object.assign({}, user);
    }
    console.log(user);
    this.toggleEditMode();
  }

  async update() {
    await this.api.updateProfile(this.editUser).catch(err => {
      console.log(err);
      this.setEditMode(false);
    });
    this.setEditMode(false);
  }

  setEditMode(edit: boolean) {
    this.editMode = edit;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  async onImageChanged(event) {
    try {
      const file = event.target.files[0];
      const url = await this.api.uploadImage(file);
      this.editUser.photoUrl = url;
    } catch (error) {
      console.log(error);
    }
  }
}
