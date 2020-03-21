import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { HomeComponent } from "./pages/home/home.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import "firebase/firestore";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { RegisterFarmerComponent } from "./pages/register-farmer/register-farmer.component";
import { RegisterEmployeeComponent } from "./pages/register-employee/register-employee.component";
import { EmployeeFeedComponent } from "./pages/employee-feed/employee-feed.component";
import { FarmerFeedComponent } from "./pages/farmer-feed/farmer-feed.component";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule } from "@angular/forms";
import { LandingComponent } from "./pages/landing/landing.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterFarmerComponent,
    RegisterEmployeeComponent,
    EmployeeFeedComponent,
    FarmerFeedComponent,
    LoginComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
