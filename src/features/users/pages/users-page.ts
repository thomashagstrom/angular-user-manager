import { Component, inject } from '@angular/core';
import { Users } from '../services/users';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-page',
  standalone: true,
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
  imports: [RouterLink],
})
export class UsersPage {
  private usersService = inject(Users);

  users = this.usersService.getUsers();
}
