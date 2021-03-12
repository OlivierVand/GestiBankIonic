import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../entities/models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private dataBase = 'http://127.0.0.1:85/';

  constructor(private httpClient: HttpClient) {}

  // méthode de récupération de tous les users
  // public listUsers() {
  //   return this.http.get(this.baseUrl);
  // }

  // méthode pour ajouter un user
  postUsers(users: Users) {
    return this.httpClient.post(this.dataBase + 'clients/add', users);
  }

  getUsersEnAttente() {
    return this.httpClient.get(this.dataBase + 'clients/list/attente');
  }

  getAgent() {
    return this.httpClient.get(this.dataBase + 'agents/list/');
  }

  getUsersByEmail() {
    return this.httpClient.get(this.dataBase);
  }

  usersConnexion(usersEmail: string) {
    return this.httpClient.get(this.dataBase + 'users/' + usersEmail);
  }

  putUsers(users) {
    return this.httpClient.put(this.dataBase + 'users/' + users.email, users);
  }
}
