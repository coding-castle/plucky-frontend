import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { EmployeeFeedComponent } from "./pages/employee-feed/employee-feed.component";
import { RegisterFarmerComponent } from "./pages/register-farmer/register-farmer.component";
import { FarmerFeedComponent } from "./pages/farmer-feed/farmer-feed.component";
import { RegisterEmployeeComponent } from "./pages/register-employee/register-employee.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "register-farmer",
    component: RegisterFarmerComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
