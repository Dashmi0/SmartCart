import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService) {}

  register() {

    this.userService.register(this.user).subscribe({

      next: () => {
        alert("Registration Successful");
      },

      error: (err: any) => {
        console.log(err);
        alert("Registration Failed");
      }

    });

  }

}