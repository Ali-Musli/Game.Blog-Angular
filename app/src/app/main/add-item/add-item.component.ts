import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  constructor(private mainService: MainService, private router: Router) {};

  addNewItem(form: NgForm):void {
    const {imageUrl, title, category, maxLevel, summary} = form.value;

    this.mainService.create(imageUrl, title, category, maxLevel, summary).subscribe((res) => {
      this.router.navigate(['/catalog']);
    })
  } 
}
