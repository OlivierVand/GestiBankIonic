import { Component, OnInit } from '@angular/core';
import { Agent, Users } from '../entities/models';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AgentService } from '../services/agent.service';
import { AppPage } from 'e2e/src/app.po';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agentvalidation',
  templateUrl: './agentvalidation.page.html',
  styleUrls: ['./agentvalidation.page.scss'],
})
export class AgentvalidationPage implements OnInit {
  agent: Agent;
  updatedUser: Users;
  user: Users;
  public agents;
  public clients;
  pass: string;

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
    this.updatedUser = {
      name: this.user.name,
      phone: this.user.phone,
      email: this.user.email,
      status: 'VALIDE',
      agent: this.user.agent,
      password: this.makeid(8),
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
      message: 'Le client ' + this.user.name + ' a été validé avec succès',
      duration: 2000,
    });
    toast.present();
  }

  makeid(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
function app(app: any, arg1: (available: boolean) => void) {
  throw new Error('Function not implemented.');
}
