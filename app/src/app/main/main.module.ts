import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { MainRouthing } from './main-routing.module';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    CatalogComponent,
    AddItemComponent,
    EditComponent,
    DetailsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRouthing
  ],
  exports: [
    CatalogComponent,
    AddItemComponent,
    EditComponent
  ]
})
export class MainModule { }
