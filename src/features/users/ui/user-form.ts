import { Component, computed, input, signal } from '@angular/core';
import { User } from '../data-access/user.model';
import { debounce, email, form, FormField, max, min, required } from '@angular/forms/signals';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  imports: [FormField],
})
export class UserForm {
  userName = input<string>('');
  firstName = input<string>('');
  lastName = input<string>('');
  enabled = input<boolean>(true);
  email = input<string>('');
  user = signal<User>({
    userName: this.userName() || '',
    firstName: this.firstName() || '',
    lastName: this.lastName() || '',
    enabled: this.enabled() || true,
    email: this.email() || '',
  } as User);

  userForm = form(this.user, (userPath) => {
    debounce(userPath.userName, 500);
    required(userPath.userName);
    email(userPath.email);
    min(userPath.userName, 3);
    max(userPath.userName, 20);
  });
}
