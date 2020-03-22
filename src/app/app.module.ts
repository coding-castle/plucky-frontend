import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import "firebase/firestore";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "../environments/environment";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LandingComponent } from "./pages/landing/landing.component";
import { EmployeeHomeComponent } from "./pages/employee-home/employee-home.component";
import { FarmerHomeComponent } from "./pages/farmer-home/farmer-home.component";
import { BottomNavComponent } from "./components/bottom-nav/bottom-nav.component";
import { FarmerProfileComponent } from "./pages/farmer-profile/farmer-profile.component";
import { EmployeeProfileComponent } from "./pages/employee-profile/employee-profile.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { NavComponent } from "./components/nav/nav.component";
import { FarmComponent } from "./components/farm/farm.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { ChecklistComponent } from "./components/checklist/checklist.component";
import { ProfileFarmComponent } from "./components/profile-farm/profile-farm.component";
import { WikiComponent } from "./pages/wiki/wiki.component";
import { FarmDetailComponent } from "./pages/farm-detail/farm-detail.component";
import { MonthOverviewComponent } from "./components/month-overview/month-overview.component";
import { AgmCoreModule } from "@agm/core";
import { MapComponent } from "./components/map/map.component";
import { MapAutocompleteComponent } from "./components/map-autocomplete/map-autocomplete.component";
import { ChatBubbleComponent } from "./components/chat-bubble/chat-bubble.component";
import { EmployeeDetailComponent } from "./pages/employee-detail/employee-detail.component";
import { ChatListComponent } from "./pages/chat-list/chat-list.component";
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";
import { ImprintComponent } from "./pages/imprint/imprint.component";
import { PrivacyComponent } from "./pages/privacy/privacy.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    EmployeeHomeComponent,
    FarmerHomeComponent,
    BottomNavComponent,
    FarmerProfileComponent,
    EmployeeProfileComponent,
    ChatComponent,
    NavComponent,
    FarmComponent,
    GalleryComponent,
    ChecklistComponent,
    ProfileFarmComponent,
    WikiComponent,
    FarmDetailComponent,
    GalleryComponent,
    MonthOverviewComponent,
    GalleryComponent,
    MapComponent,
    ChatBubbleComponent,
    EmployeeDetailComponent,
    MapAutocompleteComponent,
    ChatBubbleComponent,
    ChatListComponent,
    ComingSoonComponent,
    ChatBubbleComponent,
    ImprintComponent,
    PrivacyComponent
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
    AngularFireStorageModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot(environment.googleMaps),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
