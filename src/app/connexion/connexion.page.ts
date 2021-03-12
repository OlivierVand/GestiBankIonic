import { Component, OnInit } from '@angular/core';
import { Users } from '../entities/models';
import { UsersService } from '../services/users.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  email: string;
  password: string;
  userInfos: Users;

  constructor(
    private service: UsersService,
    public router: Router,
    public toastController: ToastController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  connect() {
    if (this.email != null && this.password != null) {
      this.service.usersConnexion(this.email).subscribe((data) => {
        this.userInfos = <Users>data;
        if (
          this.userInfos != null &&
          this.password == this.userInfos.password
        ) {
          //console.log("Auth Réussie");
          let role = this.userInfos.role;
          let navigationExtras: NavigationExtras = {
            state: {
              name: this.userInfos.name,
            },
          };
          switch (role) {
            case (role = 'CLIENT'):
              this.router.navigate(['/mescomptes'], navigationExtras);
              break;
            case (role = 'AGENT'):
              this.router.navigate(['/agent'], navigationExtras);
              break;
            case (role = 'ADMIN'):
              this.router.navigate(['/admin'], navigationExtras);
              break;
            default:
              this.activatedRoute;
              break;
          }
        } else {
          this.messageToasted('Vos identifiants sont incorrects.');
          //console.log("Mot de passe incorrect !");
        }
        //console.log(this.userInfos);
      });
    } else {
      this.messageToasted('Merci de renseigner tous les champs !');
      //console.log("Merci de renseigner tous les champs !")
    }
  }

  async messageToasted(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
}
