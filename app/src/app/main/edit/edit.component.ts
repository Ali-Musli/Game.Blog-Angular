import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) {}
  curentPost: any;
  id: any;

  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');

    this.mainService.getPost(this.id).subscribe((res) => {
      this.curentPost = res;
    })
  }
  
  edit(form: NgForm) {
    const {imageUrl, title, category, maxLevel, summary} = form.value;
    this.mainService.edit(this.id, imageUrl, title, category, maxLevel, summary).subscribe((res) => {
      this.router.navigate([`/details/${this.id}`]);
    })
  }
} 
