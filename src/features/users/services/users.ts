import { computed, Injectable, signal } from '@angular/core';
import { User } from '../data-access/user.model';

@Injectable({
  providedIn: 'root',
})
export class Users {
  private users = signal<User[]>([]);

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    // Simulate loading users from an API
    setTimeout(() => {
      this.users.set([
        { userName: 'Alice', firstName: 'Alice', email: 'alice@test.com', enabled: true },
        { userName: 'Bob', firstName: 'Bob', email: 'bob@test.com', enabled: true },
        { userName: 'Charlie', firstName: 'Charlie', email: 'charlie@test.com', enabled: true },
      ]);
    }, 1000);
  }

  getUsers() {
    return this.users.asReadonly();
  }

  getUserByEmail(email: string) {
    return computed(() => this.users().find((u) => u.email === email));
  }

  addUser(user: User) {
    this.users.update((users) => [...users, user]);
  }

  removeUser(email: string) {
    this.users.update((users) => users.filter((u) => u.email !== email));
  }
}
