import { Component, OnInit } from "@angular/core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-employee-profile",
  templateUrl: "./employee-profile.component.html",
  styleUrls: ["./employee-profile.component.scss"]
})
export class EmployeeProfileComponent implements OnInit {
  name = "Lorem Ipsum";
  email = "lorem@ipsum.de";
  phone = "+49 1234 5678910";
  location = "Deutschland";
  editMode = false;
  cameraIcon = faCamera;

  constructor() {}

  ngOnInit(): void {}

  onToggleEditMode() {
    this.editMode = !this.editMode;
  }

  onImageChanged(event) {
    alert(event.target.files);
  }
}
