import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mescomptes',
  templateUrl: './mescomptes.page.html',
  styleUrls: ['./mescomptes.page.scss'],
})
export class MescomptesPage {
  constructor(private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
