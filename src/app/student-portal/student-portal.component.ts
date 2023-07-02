import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent {
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Student Portal');
  }
}
