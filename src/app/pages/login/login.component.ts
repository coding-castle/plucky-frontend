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
  error = false;
  loading = false;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  toggleLogin() {
    this.error = false;
    this.registerActive = !this.registerActive;
  }

  ngOnInit(): void {
    this.userType = this.route.snapshot.paramMap.get("type") as
      | "farmer"
      | "plucky";
  }

  handleError() {
    this.error = true;
    this.loading = false;
  }

  async login() {
    this.loading = true;
    console.log("logging in...");
    this.error = false;
    if (this.email && this.password) {
      try {
        await this.auth.emailLogin(this.email.trim(), this.password);
        if (this.userType === "plucky") {
          this.router.navigateByUrl("/employee");
        } else if (this.userType === "farmer") {
          this.router.navigateByUrl("/farmer");
        }
      } catch (error) {
        console.log(error);
        this.handleError();
      }
    } else {
      this.handleError();
    }
  }

  async register() {
    this.loading = true;
    console.log("registering...");
    this.error = false;
    if (
      this.email &&
      this.password &&
      this.confirmPassword &&
      this.name &&
      this.privacyChecked &&
      this.password === this.confirmPassword
    ) {
      try {
        await this.auth.emailRegister(
          this.email,
          this.name,
          this.password,
          this.userType
        );
        if (this.userType === "plucky" && !this.error) {
          this.router.navigateByUrl("/employee");
        } else if (this.userType === "farmer") {
          this.router.navigateByUrl("/farmer");
        }
      } catch (error) {
        console.log(error);
        this.handleError();
      }
    } else {
      console.log("check credentials");
      this.handleError();
    }
  }
}
