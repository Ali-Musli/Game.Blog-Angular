import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from 'src/app/type/game';
import { User } from 'src/app/type/user';
import { UserServiceService } from 'src/app/user/user-service.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  constructor(private mainService: MainService, public userService: UserServiceService, private router: Router) {}

  gameInfo: Games[] = [];
  user: User | undefined;


  ngOnInit(): void {
    this.mainService.getInfo().subscribe((games) => {
      this.gameInfo = games;
    })
    
    this.userService.getUser().subscribe((useer) => {
      this.user=useer;
    })
  }

  delete(event: any) {
    if(confirm("are you sure?") == true) {
      this.mainService.delete(event.target['id']).subscribe(() => {
        this.router.navigate(['home']);
      })
    }
  }
}
