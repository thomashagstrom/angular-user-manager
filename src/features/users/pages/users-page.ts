import { Component, inject } from '@angular/core';
import { Users } from '../services/users';

@Component({
  selector: 'app-users-page',
  standalone: true,
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage {
  private usersService = inject(Users);

  users = this.usersService.getUsers();
}
