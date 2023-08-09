import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserServiceService, private router: Router) {

  }

  error = '';

  register(form: NgForm) {
    const {email, username, password, rePassword} = form.value;

    if(password !== rePassword){
      this.error = 'Repeat Password don t match with Pass';
      return;
    }

    this.userService.register(email, username, password, rePassword).subscribe((res) => {
      this.router.navigate(['/catalog']);
      
    })
  }
}
