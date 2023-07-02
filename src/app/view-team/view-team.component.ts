import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent {
  constructor(private router: Router, private titleService: Title) { }
  goBack(): void {
    this.router.navigate(['../student_portal/team_portal']);
  }
  ngOnInit(): void {
    this.titleService.setTitle('View Team');
  }
}