import { Component, computed, signal } from '@angular/core';
import { User } from '../data-access/user.model';
import { debounce, email, form, FormField, max, min, required } from '@angular/forms/signals';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  imports: [FormField],
})
export class UserForm {
  user = signal<User>({
    userName: '',
    firstName: '',
    lastName: '',
    enabled: true,
    email: '',
  } as User);

  userForm = form(this.user, (userPath) => {
    debounce(userPath.userName, 500);
    required(userPath.userName);
    email(userPath.email);
    min(userPath.userName, 3);
    max(userPath.userName, 20);
  });
}
