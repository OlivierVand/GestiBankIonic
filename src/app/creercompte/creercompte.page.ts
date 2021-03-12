import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../entities/models';
import { UsersService } from '../services/users.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.page.html',
  styleUrls: ['./creercompte.page.scss'],
})
export class CreercomptePage implements OnInit {
  users: Users;
  nom: string;
  prenom: string;
  phone: number;
  mail: string;

  constructor(
    private service: UsersService,
    private router: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  UsersCreation() {
    this.users = {
      name: this.nom,
      phone: this.phone,
      email: this.mail,
      role: 'CLIENT',
      status: 'EN ATTENTE',
      password: ' ',
      agent: ' ',
    };

    this.service.postUsers(this.users).subscribe((response) => {
      console.log(this.users);
      this.messageToasted('Compte crée avec succès');
      this.router.navigate(['home']);
    });
  }
  async messageToasted(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
}
