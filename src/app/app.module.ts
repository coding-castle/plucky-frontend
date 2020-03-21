import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { HomeComponent } from "./pages/home/home.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterFarmerComponent } from './pages/register-farmer/register-farmer.component';
import { RegisterEmployeeComponent } from './pages/register-employee/register-employee.component';
import { EmployeeFeedComponent } from './pages/employee-feed/employee-feed.component';
import { FarmerFeedComponent } from './pages/farmer-feed/farmer-feed.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, RegisterFarmerComponent, RegisterEmployeeComponent, EmployeeFeedComponent, FarmerFeedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
