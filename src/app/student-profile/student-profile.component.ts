import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  constructor(private router: Router) { }
  goBack(): void {
    this.router.navigate(['../student_portal']);
  }
}
