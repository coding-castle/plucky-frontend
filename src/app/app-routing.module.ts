import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { EmployeeFeedComponent } from "./pages/employee-feed/employee-feed.component";
import { RegisterFarmerComponent } from "./pages/register-farmer/register-farmer.component";
import { FarmerFeedComponent } from "./pages/farmer-feed/farmer-feed.component";
import { RegisterEmployeeComponent } from "./pages/register-employee/register-employee.component";
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

const routes: Routes = [
  {
    path: "",
    redirectTo: "/landing",
    pathMatch: "full"
  },
  {
    path: "landing",
    component: LandingComponent
  },
  {
    path: "landing/:type",
    component: LoginComponent
  },
  {
    path: "farm-detail/:id",
    component: FarmDetailComponent
  },
  {
    path: "register-farmer",
    component: RegisterFarmerComponent
  },
  {
    path: "farmer",
    component: FarmerHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employee",
    component: EmployeeHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "register-employee",
    component: RegisterEmployeeComponent
  },
  {
    path: "farmer-feed",
    component: FarmerFeedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employee-feed",
    component: EmployeeFeedComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "farmer-profile",
    component: FarmerProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employee-profile",
    component: EmployeeProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employee-detail/:uid",
    component: EmployeeDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "chat",
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "wiki",
    component: WikiComponent,
    canActivate: [AuthGuard]
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
