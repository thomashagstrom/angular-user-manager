import { Component, inject } from '@angular/core';
import { Users } from '../services/users';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-users-page',
  standalone: true,
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatDividerModule],
})
export class UsersPage {
  private usersService = inject(Users);

  users = this.usersService.getUsers();
}
