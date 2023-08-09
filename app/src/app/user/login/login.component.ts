import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private userService:UserServiceService,
    private router: Router
    ) {}
 
  login(form: NgForm): void {
    const {email, password} = form.value;

    this.userService.login(email, password).subscribe((res) => {
      this.router.navigate(['/catalog'])
    })
  }
}
