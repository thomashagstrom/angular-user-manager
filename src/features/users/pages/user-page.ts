import { Component, inject } from '@angular/core';
import { Users } from '../services/users';
import { UserForm } from '../ui/user-form';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../data-access/user.model';

@Component({
  selector: 'app-user-page',
  standalone: true,
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
  imports: [UserForm],
})
export class UsersPage {
  private usersService = inject(Users);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  user = this.usersService.getUserByEmail(this.route.snapshot.paramMap.get('email') || '');

  onUserSaved(updatedUser: User) {
    this.usersService.addUser(updatedUser);
    this.router.navigate(['/users']);
  }
}
