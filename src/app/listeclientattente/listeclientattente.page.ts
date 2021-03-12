import { Component, OnInit } from '@angular/core';
import { Agent, Users } from '../entities/models';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AgentService } from '../services/agent.service';
import { AppPage } from 'e2e/src/app.po';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-listeclientattente',
  templateUrl: './listeclientattente.page.html',
  styleUrls: ['./listeclientattente.page.scss'],
})
export class ListeclientattentePage implements OnInit {
  agent: Agent;
  updatedUser: Users;
  user: Users;
  public agents;
  public clients;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private agentService: AgentService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.agentService.getAllAgents().subscribe((data) => {
      this.agents = <Agent[]>data;
      console.log(this.agents);
    });

    this.userService.getUsersEnAttente().subscribe((data) => {
      this.clients = <Users[]>data;
      console.log(this.clients);
    });
  }

  updateUsers() {
    this.user.agent = this.agent.email;
    //   console.log(user);
    this.updatedUser = {
      name: this.user.name,
      phone: this.user.phone,
      email: this.user.email,
      status: this.user.status,
      agent: this.user.agent,
      password: this.user.password,
      role: this.user.role,
    };
    //   };
    console.log(this.updatedUser);
    this.userService.putUsers(this.updatedUser).subscribe((response) => {
      console.log('ok');
      this.updateSuccessToast();
      this.router.navigate(['home']);
    });
  }

  async updateSuccessToast() {
    const toast = await this.toastController.create({
      message:
        this.agent.name + ' a été affecté avec succès à ' + this.user.name,
      duration: 2000,
    });
    toast.present();
  }

  agentSelected() {
    return this.agent;
  }
}
