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
import { TodoComponent } from "./pages/todo/todo.component";
import { FarmerHomeComponent } from "./pages/farmer-home/farmer-home.component";
import { EmployeeHomeComponent } from "./pages/employee-home/employee-home.component";
import { AuthGuard } from "./services/auth.guard";
import { EmployeeProfileComponent } from "./pages/employee-profile/employee-profile.component";

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
    component: FarmerFeedComponent
  },
  {
    path: "employee-feed",
    component: EmployeeFeedComponent
  },
  {
    path: "farmer-profile",
    component: FarmerProfileComponent
  },
  {
    path: "employee-profile",
    component: EmployeeProfileComponent
  },
  {
    path: "chat",
    component: ChatComponent
  },
  {
    path: "todo",
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
