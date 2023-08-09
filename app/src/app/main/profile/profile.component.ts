import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profilePost: any;
  user:any;
  constructor(private route: ActivatedRoute, private mainService: MainService, private userService: UserServiceService, private router:Router ) {
   }

  ngOnInit(): void {
    this.mainService.getInfo().subscribe((res:any) => {
      const id = this.route.snapshot.paramMap.get('id');
      this.profilePost = res.filter(function (post:any) {
        return post._ownerId === id
      })
      console.log(id);
      console.log(this.profilePost);
    })
    
    this.userService.getUser().subscribe((useer) => {
      this.user=useer
    })
  }

  delete(event: any) {
    if(confirm("are you sure?") == true) {
      this.mainService.delete(event.target['id']).subscribe(() => {
        this.router.navigate([`catalog`])
      })
    }
  }
}
