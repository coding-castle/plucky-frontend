import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { FarmTag } from "src/app/models/farm.model";

@Component({
  selector: "app-profile-farm",
  templateUrl: "./profile-farm.component.html",
  styleUrls: ["./profile-farm.component.scss"]
})
export class ProfileFarmComponent implements OnInit {
  @Input() editState: boolean;
  @Input() farmTags: FarmTag[];
  profile: User;
  constructor(private auth: AuthService) {
    auth.user$.subscribe(data => {
      this.profile = data;
    });
  }

  ngOnInit(): void {}
}
