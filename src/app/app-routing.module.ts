import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { LoginComponent } from "./pages/login/login.component";
import { FarmerProfileComponent } from "./pages/farmer-profile/farmer-profile.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { FarmerHomeComponent } from "./pages/farmer-home/farmer-home.component";
import { EmployeeHomeComponent } from "./pages/employee-home/employee-home.component";
import { AuthGuard } from "./services/auth.guard";
import { EmployeeProfileComponent } from "./pages/employee-profile/employee-profile.component";
import { WikiComponent } from "./pages/wiki/wiki.component";
import { FarmDetailComponent } from "./pages/farm-detail/farm-detail.component";
import { EmployeeDetailComponent } from "./pages/employee-detail/employee-detail.component";
import { ImprintComponent } from "./pages/imprint/imprint.component";
import { PrivacyComponent } from "./pages/privacy/privacy.component";
import { ChatListComponent } from "./pages/chat-list/chat-list.component";
import { LoginGuard } from "./services/login.guard";
import { Role } from "./models/role.enum";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/landing",
    pathMatch: "full",
    canActivate: [LoginGuard]
  },
  {
    path: "landing",
    component: LandingComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "landing/:type",
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "farm-detail/:id",
    component: FarmDetailComponent,
    data: { roles: [Role.Plucky] }
  },
  {
    path: "farmer",
    component: FarmerHomeComponent,
    data: { roles: [Role.Farmer] },
    canActivate: [AuthGuard]
  },
  {
    path: "employee",
    component: EmployeeHomeComponent,
    data: { roles: [Role.Plucky] },
    canActivate: [AuthGuard]
  },
  {
    path: "farmer-profile",
    component: FarmerProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Farmer] }
  },
  {
    path: "employee-profile",
    component: EmployeeProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Plucky] }
  },
  {
    path: "employee-detail/:uid",
    component: EmployeeDetailComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Farmer] }
  },
  {
    path: "chat",
    component: ChatComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Plucky, Role.Farmer] }
  },
  {
    path: "chat-list",
    component: ChatListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Plucky, Role.Farmer] }
  },
  {
    path: "wiki",
    component: WikiComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Plucky, Role.Farmer] }
  },
  {
    path: "imprint",
    component: ImprintComponent
  },
  {
    path: "privacy",
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
