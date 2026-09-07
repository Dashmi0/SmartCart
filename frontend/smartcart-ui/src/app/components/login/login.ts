import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../services/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  email='';
  password='';

  constructor(private userservice:UserService, private router:Router){}
  
  login(){
    const user={
      email:this.email,
      password:this.password
    };
    this.userservice.login(user).subscribe({
    next: (response: any) => {

  alert("Login Successful");

  console.log(response);

  localStorage.setItem("user", JSON.stringify(response));

  this.router.navigate(['/home']);

},
    });
  }
}
