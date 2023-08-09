import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurentUser } from 'src/app/type/curentUser';
import { Games } from 'src/app/type/game';
import { UserServiceService } from 'src/app/user/user-service.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  constructor(private mainService: MainService, public userService: UserServiceService, private router: Router) {

  }

  gameInfo: any;
  user: any;
  curentPost: any;


  ngOnInit(): void {

    this.mainService.getInfo().subscribe((games) => {
      this.gameInfo = games;
    })
    
    this.userService.getUser().subscribe((useer) => {
      this.user=useer
    })
  }

  delete(event: any) {
    confirm("are you sure?")
    if(confirm("are you sure?") == true) {
      this.mainService.delete(event.target['id']).subscribe(() => {
        this.router.navigate(['home'])
      })
    }
  }

  // edit(event: any) {
  //   console.log(event.target['id']);
  //   this.mainService.getPost(event.target['id']).subscribe((res) => {
  //     this.curentPost = res;
  //     this.router.navigate(['/edit'])
      
  //   })
  // }
}
