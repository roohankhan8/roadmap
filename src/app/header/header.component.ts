import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  // PAGE CHANGE
  signin: boolean=true
  signup: boolean=false
  
  currentUrl: string = '';

  ngOnInit() {
    this.currentUrl = this.router.url;
    if(this.currentUrl.includes('signup')){
      this.signin=false
      this.signup=true
    }
  }

  // TEXT BOLD SECTION
  onStudent: boolean = true;
  onTeacher: boolean = false;
  onJudge: boolean = false;
  onMentor: boolean = false;
  onAdmin: boolean = false;
  classRemove(): void {
    this.onStudent = false;
    this.onTeacher = false;
    this.onJudge = false;
    this.onMentor = false;
    this.onAdmin = false;
  }
  classAdd(category: string): void {
    this.classRemove();
    if (category == 'student') {
      this.onStudent = true;
    } else if (category == 'teacher') {
      this.onTeacher = true;
    } else if (category == 'judge') {
      this.onJudge = true;
    } else if (category == 'mentor') {
      this.onMentor = true;
    } else if (category == 'admin') {
      this.onAdmin = true;
    }
  }
  // TEXT BOLD SECTION ENDS
}
