import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { AuthService } from "src/app/services/auth.service";
import { Observable } from "rxjs";
import { Farm } from "src/app/models/farm.model";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-farmer-home",
  templateUrl: "./farmer-home.component.html",
  styleUrls: ["./farmer-home.component.scss"]
})
export class FarmerHomeComponent implements OnInit {
  faArrowRight = faArrowRight;
  public title = "Bewerber:innen";
  public nextStepTitle = "Nächste Schritte";
  newFarmer = false;
  public newTodos = [
    { state: false, text: "Leg dein Profil an" },
    { state: false, text: "Finde Pluckies in deiner Nähe" },
    { state: false, text: "Schreibe einem Plucky im Chat" },
    { state: true, text: "Informiere dich über unsere Initiative" }
  ];
  public standardTodos = [
    { state: true, text: "Leg dein Profil an" },
    { state: true, text: "Finde Pluckies in deiner Nähe" },
    { state: false, text: "Schreibe einem Plucky im Chat" },
    { state: false, text: "Informiere dich über unsere Initiative" }
  ];
  farm$: Observable<Farm>;
  applicants$: Observable<User[]>;
  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if (user && user.uid) {
        this.api.getFarmByUser(user.uid).subscribe(farm => {
          if (farm && farm.length > 0) {
            this.newFarmer = false;
            this.applicants$ = this.api.getApplicantsForFarm(farm[0]);
          } else {
            this.newFarmer = true;
          }
        });
      }
    });
  }

  getGalleryItems(applicants: User[]) {
    return applicants.map(a => ({
      name: a.displayName,
      image: a.photoUrl,
      url: `/employee-detail/${a.uid}`
    }));
  }
}
