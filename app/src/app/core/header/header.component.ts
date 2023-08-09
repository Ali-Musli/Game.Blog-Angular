import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(public userService: UserServiceService, private router: Router) {}
  isLogged: boolean = false
  user: any

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) => {
      this.user = res
      console.log(res);
      
    })
    this.isLogged = this.userService.isLogged
  }

  logout(): void {
    this.userService.logout().subscribe(() => {
      
      this.router.navigate(['/'])
    })
  }

  profile() {
    this.userService.getUser().subscribe((res:any) => {
      this.router.navigate([`profile/${res._id}`])
    })
  }

}
