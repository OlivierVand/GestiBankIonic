import { Component, OnInit } from '@angular/core';
import { Users } from '../entities/models';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listeagent',
  templateUrl: './listeagent.page.html',
  styleUrls: ['./listeagent.page.scss'],
})
export class ListeagentPage implements OnInit {
  users: Users[];
  constructor(private service: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.refresh();
  }

  public refresh() {
    this.service.getAgent().subscribe((response) => {
      console.log(response);
      this.users = <Users[]>response;
    });
  }
}
