import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mescomptes',
  templateUrl: './mescomptes.page.html',
  styleUrls: ['./mescomptes.page.scss'],
})
export class MescomptesPage {
  constructor(private menu: MenuController) {}
}
