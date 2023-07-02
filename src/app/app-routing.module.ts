import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeamPortalComponent } from './team-portal/team-portal.component';
import { ViewTeamComponent } from './view-team/view-team.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'student_portal', component: StudentPortalComponent },
  { path: 'student_portal/student_profile', component: StudentProfileComponent },
  { path: 'student_portal/team_portal', component: TeamPortalComponent },
  { path: 'student_portal/team_portal/view_team', component: ViewTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
