import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team-portal',
  templateUrl: './team-portal.component.html',
  styleUrls: ['./team-portal.component.css']
})
export class TeamPortalComponent {
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle('Team Portal');
  }
}


