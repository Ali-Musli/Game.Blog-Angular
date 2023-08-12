import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/type/user';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(public userService: UserServiceService, private router: Router) {}
  isLogged: boolean = false
  user: User | undefined

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) => {
      this.user = res;
      
    })
    this.isLogged = this.userService.isLogged;
  }

  logout(): void {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['/']);
    })
  }

  profile() {
    this.userService.getUser().subscribe((res:any) => {
      this.router.navigate([`profile/${res._id}`]);
    })
  }

}
