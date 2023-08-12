import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from 'src/app/type/game';
import { User } from 'src/app/type/user';
import { UserServiceService } from 'src/app/user/user-service.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute, private mainService: MainService, private userService: UserServiceService, private router: Router) {};

  id: any;
  curentPost: Games | undefined;
  user: User | undefined;
  curentComments: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.mainService.getPost(this.id).subscribe((res) => {
      this.curentPost = res;
    })

    this.userService.getUser().subscribe((useer) => {
      this.user=useer;
    })

    this.mainService.getCommntsById(this.id).subscribe((res) => {    
      const id = this.id;
      this.curentComments = res;
      this.curentComments = this.curentComments.filter(function (post:any) {
        return post.id === id;
      })
    })
  }

  get isOwner() {
    return this.curentPost?._ownerId === this.user?._id;
  }

  delete(event: any) {
    if(confirm("are you sure?") == true) {
      this.mainService.delete(event.target['id']).subscribe(() => {
        this.router.navigate(['catalog']);
      })
    }
  }

  deleteComment(event: any) {
    if(confirm("are you sure?") == true) {
      this.mainService.deleteCommentById(event.target['id']).subscribe(() => {
        this.curentComments = this.curentComments.filter(function(comment: any) {
          return comment._id !== event.target['id'];
        })
        
        this.router.navigate([`details/${event.target['id']}`]);
      })
    }
  }

  addNewComment(form: NgForm) {
    const {comment} = form.value
    this.mainService.addComment(comment, this.id, this.user!.email).subscribe((res) => {
      this.curentComments = [...this.curentComments, res];
      form.reset();
      this.router.navigate([`details/${this.id}`]);
    })
  }
}
