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
import { EmployeeHomeComponent } from "./pages/employee-home/employee-home.component";
import { FarmerHomeComponent } from "./pages/farmer-home/farmer-home.component";
import { BottomNavComponent } from "./components/bottom-nav/bottom-nav.component";
import { FarmerProfileComponent } from "./pages/farmer-profile/farmer-profile.component";
import { EmployeeProfileComponent } from "./pages/employee-profile/employee-profile.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { TodoComponent } from "./pages/todo/todo.component";
import { NavComponent } from "./components/nav/nav.component";
import { FarmComponent } from "./components/farm/farm.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterFarmerComponent,
    RegisterEmployeeComponent,
    EmployeeFeedComponent,
    FarmerFeedComponent,
    LoginComponent,
    LandingComponent,
    EmployeeHomeComponent,
    FarmerHomeComponent,
    BottomNavComponent,
    FarmerProfileComponent,
    EmployeeProfileComponent,
    ChatComponent,
    TodoComponent,
    NavComponent,
    FarmComponent
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
