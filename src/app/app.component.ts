import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mes Comptes', url: '/mescomptes', icon: 'happy' },
    { title: 'Virements', url: '/virement', icon: 'folder' },
    { title: 'Commander un chequier', url: '/chequier', icon: 'pencil' },
    { title: 'Ma carte', url: '/macarte', icon: 'cash' },
    { title: 'Contacter mon conseiller', url: '/conseiller', icon: 'call' },
    { title: 'IBAN/RIB', url: '/iban', icon: 'card' },
    { title: 'Assurances', url: '/assurance', icon: 'person' },
    { title: 'Reglages', url: '/reglage', icon: 'key' },
  ];

  constructor() {}
}
