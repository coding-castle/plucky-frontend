import { Component, OnInit, Input } from "@angular/core";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { AuthService } from "src/app/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  userType: "farmer" | "plucky";
  thumbsUp = faThumbsUp;
  email = "";
  password = "";
  privacyChecked = false;
  name = "";
  confirmPassword = "";
  registerActive = true;
  index = 0;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userType = this.route.snapshot.paramMap.get("type") as
      | "farmer"
      | "plucky";
  }

  async login() {
    console.log("logging in...");
    if (this.email && this.password) {
      await this.auth.emailLogin(this.email, this.password);
      this.router.navigateByUrl("/register-employee");
    } else {
      console.log("Check Credentials...");
    }
  }

  async register() {
    console.log("registering...");
    if (
      this.email &&
      this.password &&
      this.confirmPassword &&
      this.name &&
      this.privacyChecked &&
      this.password === this.confirmPassword
    ) {
      if (this.userType === "plucky") {
        // pluckies
        await this.auth.emailRegister(
          this.email,
          this.name,
          this.password,
          this.userType
        );
        this.router.navigateByUrl("/register-employee");
      } else if (this.userType === "farmer") {
        // farmer
      }
    }
  }
}
