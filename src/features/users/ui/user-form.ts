import { Component, effect, input, output, signal } from '@angular/core';
import { debounce, email, form, FormField, max, min, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { User } from '../data-access/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
  imports: [
    CommonModule,
    FormField,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
  ],
})
export class UserForm {
  userName = input<string>();
  firstName = input<string>();
  lastName = input<string>();
  enabled = input<boolean>(true);
  email = input<string>();
  user = signal<User>({
    userName: this.userName() || '',
    firstName: this.firstName() || '',
    lastName: this.lastName() || '',
    enabled: this.enabled() ?? true,
    email: this.email() || '',
  } as User);

  constructor() {
    effect(() => {
      this.user.set({
        userName: this.userName() || '',
        firstName: this.firstName() || '',
        lastName: this.lastName() || '',
        enabled: this.enabled() ?? true,
        email: this.email() || '',
      } as User);
    });
  }

  userForm = form(this.user, (userPath) => {
    debounce(userPath.userName, 500);
    required(userPath.userName);
    email(userPath.email);
    min(userPath.userName, 3);
    max(userPath.userName, 20);
  });

  // Catch changes to the form and emit the user object when the form is valid
  userSaved = output<User>();

  onSubmit() {
    if (this.userForm().valid()) {
      const newVal = this.userForm().value;
      if (newVal) {
        // Emit to the parent component
        this.userSaved.emit(newVal());
        console.log('User saved:', newVal());
      }
    } else {
      console.log('Form is invalid, cannot save user.');
    }
  }
}
