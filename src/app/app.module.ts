import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeamPortalComponent } from './team-portal/team-portal.component';
import { ViewTeamComponent } from './view-team/view-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    HeaderComponent,
    SignupComponent,
    StudentPortalComponent,
    StudentProfileComponent,
    TeamPortalComponent,
    ViewTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
